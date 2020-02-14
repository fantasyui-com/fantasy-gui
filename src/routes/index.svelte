<script>

import capitalize from 'lodash/capitalize.js';
import kebabCase from 'lodash/kebabCase.js';
import camelCase from 'lodash/camelCase.js';
import chroma from 'chroma-js';
import { css } from 'emotion';
import hljs from 'highlight.js/lib/highlight.js';
import cssLang from 'highlight.js/lib/languages/less';
import htmlLang from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('css', cssLang);
hljs.registerLanguage('html', htmlLang);

let preferences = [

  {
    id: 'darkness',
    type:'range',
    label: 'Darkness Level',
    base: .1,
    precision: 1,
  },
  {
    id: 'space',
    type:'range',
    label: 'Empty Space',
    base: .1,
  },

  {
    id: 'glow',
    type:'range',
    label: 'Glow Intensity',
    base: .3,
    range:[2,8],
    precision:0,
    value:-1,
  }

];

$: configuration = preferences.reduce(function(map, obj) {
    map[obj.id] = obj;
    //if(!obj.range) obj.range = [0,100];
    if(!obj.value) obj.value = 0;
    if(!obj.precision) obj.precision = 0;
    if(obj.range) obj.value = (obj.range[0] + ((obj.range[1]-obj.range[0]) * obj.base)).toFixed(obj.precision);
    return map;
}, {});

// HELPER FUNCTIONS

function clamp(val, min, max, fix=0){
  return (min + ((max-min) * val)).toFixed(fix);
}

// CODE GENERATION

$: database = [

  {
    name: 'background',
    variant: 'primary',
    declaration: {
      color: chroma('#649093').brighten( configuration.darkness.base ).hex(),
      backgroundColor: chroma('#1e3233').darken( configuration.darkness.base ).hex(),
    },
  },

  {
    name: 'glow',
    declaration: {
      borderStyle: `solid`,
      borderWidth: `1px`,
      borderColor: `#9ecaed`,
    },
  },

  {
    name: 'glow',
    variant: 'small',
    requires:'glow',
    declaration: {
      boxShadow: `inset 0 0 ${clamp(configuration.glow.base,2,12)}px #9ecaed, 0 0 ${clamp(configuration.glow.base,2,12)}px #9ecaed`,
      borderRadius: `${clamp(configuration.glow.base,0,4)}px`,
    },
  },

  {
    name: 'glow',
    variant: 'large',
    requires:'glow',
    declaration: {
      boxShadow: `inset 0 0 ${clamp(configuration.glow.base,2,24)}px #9ecaed, 0 0 ${clamp(configuration.glow.base,2,24)}px #9ecaed`,
      borderRadius: `${clamp(configuration.glow.base,0,20)}px`,
    },
  },

  {
    name: 'space',
    variant: 'small',
    declaration: {
      padding: `${clamp(configuration.space.base,0,.5,2)}rem`,
    },
  },

  {
    name: 'space',
    variant: 'large',
    declaration: {
      padding: `${clamp(configuration.space.base,1,3,2)}rem`,
    },
  },






];


$: generated = database.reduce(function(object, rule) {
    const id = [rule.name, rule.variant].filter(i=>i).join('-')
    const name = camelCase(id);
    object[name] = rule;
    rule.selector = `.` + id;
    rule.declarations = [];
    if(rule.requires) rule.declarations.push(`/* NOTE: requires base class "${rule.requires}" */`);
    rule.declarations = rule.declarations.concat( Object.keys(rule.declaration).map(property=>`${kebabCase(property)}: ${rule.declaration[property]};`) )
    rule.code = `${rule.selector} {\n${rule.declarations.map(declaration=>'  '+declaration).join('\n')}\n}`;
    rule.preview = css`${rule.declarations.join('')}`;
    return object;
}, {});














// $: backgroundPrimaryDirectives = `
//   color: ${chroma('#649093').brighten( configuration.darkness.base ).hex()};
//   background-color: ${chroma('#1e3233').darken( configuration.darkness.base ).hex()};
// `.replace(/^\n|\n$/g,'');
//
// $: glowSmDirectives = `
//   border-style: solid;
//   border-width: 1px;
//   border-color: #9ecaed;
//   box-shadow: inset 0 0 ${clamp(configuration.glow.base,2,12)}px #9ecaed, 0 0 ${clamp(configuration.glow.base,2,12)}px #9ecaed;
//   border-radius: ${clamp(configuration.glow.base,0,4)}px;
// `.replace(/^\n|\n$/g,'');
//
// $: glowLgDirectives = `
//   border-style: solid;
//   border-width: 1px;
//   border-color: #9ecaed;
//   box-shadow: inset 0 0 ${clamp(configuration.glow.base,2,24)}px #9ecaed, 0 0 ${clamp(configuration.glow.base,2,24)}px #9ecaed;
//   border-radius: ${clamp(configuration.glow.base,0,20)}px;
// `.replace(/^\n|\n$/g,'');
//
// $: spaceSmDirectives = `
//   padding: ${clamp(configuration.space.base,0,.5,2)}rem;
// `.replace(/^\n|\n$/g,'');
//
// $: spaceLgDirectives = `
//   padding: ${clamp(configuration.space.base,1,3,2)}rem;
// `.replace(/^\n|\n$/g,'');

// // USED IN VISUAL PREVIEW
// $: generated.backgroundPrimary.preview = css`${backgroundPrimaryDirectives}`;
// $: generated.glowSmall.preview = css`${glowSmDirectives}`;
// $: glowLgDirectivesPreview = css`${glowLgDirectives}`;
// $: generated.spaceSmall.preview = css`${spaceSmDirectives}`;
// $: spaceLgDirectivesPreview = css`${spaceLgDirectives}`;

// USED IN GENERATED CODE CODE
function highlightCss(code){
  return hljs.highlight('css', code).value
}

$: cssCode = highlightCss( Object.keys(generated).map(key=>generated[key].code).join('\n\n') );

//
// $: cssCode = highlightCss(`
// .background-primary {
// ${backgroundPrimaryDirectives}
// }
//
// .glow-sm {
// ${glowSmDirectives}
// }
// .glow-lg {
// ${glowLgDirectives}
// }
//
// .space-sm {
// ${spaceSmDirectives}
// }
// .space-lg {
// ${spaceLgDirectives}
// }
// `);
//

/*
TODO: ADD CRT EFFECT
background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
background-size: 100% 2px, 3px 100%;
*/

</script>

<style>

</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>


<div class="container-fluid mb-0">

  <div class="row">

    <div class="{generated.backgroundPrimary.preview} col-12 col-md-6 col-lg-9 p-5 shadow" style="min-height: 20rem;">



      <div>
      <form class="{generated.glow.preview} {generated.glowSmall.preview} {generated.spaceLarge.preview}">

            <h1>Payment form</h1>
            <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
            <section>
                <h2>Contact information</h2>
                <fieldset class="{generated.spaceSmall.preview}">
                  <legend>Title</legend>
                  <ul>
                      <li>
                        <label for="title_1">
                          <input type="radio" id="title_1" name="title" value="A">
                          Ace
                        </label>
                      </li>
                      <li>
                        <label for="title_2">
                          <input type="radio" id="title_2" name="title" value="K" >
                          King
                        </label>
                      </li>
                      <li>
                        <label for="title_3">
                          <input type="radio" id="title_3" name="title" value="Q">
                          Queen
                        </label>
                      </li>
                  </ul>
                </fieldset>
                <p class="{generated.spaceSmall.preview}">
                  <label for="name">
                    <span>Name: </span>
                    <strong><abbr title="required">*</abbr></strong>
                  </label>
                  <input  class="{generated.backgroundPrimary.preview} {generated.glowSmall.preview}" type="text" id="name" name="username">
                </p>
                <p class="{generated.spaceSmall.preview}">
                  <label for="mail">
                    <span>E-mail: </span>
                    <strong><abbr title="required">*</abbr></strong>
                  </label>
                  <input  class="{generated.backgroundPrimary.preview} {generated.glowSmall.preview}" type="text" id="mail" name="usermail">
                </p>
                <p class="{generated.spaceSmall.preview}">
                  <label for="pwd">
                    <span>Password: </span>
                    <strong><abbr title="required">*</abbr></strong>
                  </label>
                  <input  class="{generated.backgroundPrimary.preview} {generated.glowSmall.preview}" type="text" id="pwd" name="password">
                </p>
            </section>

            <section>
                <p> <button class="{generated.backgroundPrimary.preview} {generated.glowSmall.preview}" type="submit">Validate the payment</button> </p>
            </section>
        </form>

      </div>

    </div>

    <div class="col-12 col-md-6 col-lg-3 p-5 bg-dark text-white shadow" style="min-height: 40rem;">
      <h4 class="mb-0">Preference Pane</h4>
      <div class="mb-3"><small class="text-muted">adjust configuration as needed</small></div>

      {#each preferences as preference (preference.id)}



      {#if preference.type == 'range'}
        <div class="card-text">
          <label for="id{capitalize(preference.id)}"><small class="text-muted">{preference.label} ({configuration[preference.id].value||preference.base})</small></label>
          <div class="input-group mb-3">
            <div class="custom-control custom-range">
              <input type="range" class="w-100" bind:value={preference.base} min="0" max="1" step="0.01" id="id{capitalize(preference.id)}">
            </div>
          </div>
        </div>
      {:else if preference.type == 'choice'}

      {:else}

      {/if}

      {/each}



    </div>

  </div>

  <div class="row">

      <div class="col p-0 bg-dark text-white shadow border-top border-secondary" style="min-height: 20rem;">
        <h4 class="mb-0 p-2">Generated Source-code</h4>
        <div class="mb-3 p-2"><small class="text-muted">copy the code below</small></div>



        <pre class="mb-0 shadow">
        <code class="language-css css hljs">
        {JSON.stringify(generated,null,'  ')}
        </code>
        </pre>


        <pre class="mb-0 shadow">
        <code class="language-css css hljs">
        {@html cssCode}
        </code>
        </pre>

      </div>

  </div>

</div>
