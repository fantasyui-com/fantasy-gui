<script>

import { onMount } from "svelte";
import { stores } from '@sapper/app';
const { page } = stores();

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

// PREFERENCE PANE CONFIGURATION



const preferences = [

  {
    id: 'darkness',
    type:'range',
    label: 'Darkness Level',
    fraction: .53,
    precision: 1,
  },

  {
    id: 'space',
    type:'range',
    label: 'Empty Space',
    fraction: .87,
  },

  {
    id: 'phosphor',
    type:'range',
    label: 'Phosphor Zones',
    fraction: .43,
  },

  {
    id: 'glow',
    type:'range',
    label: 'Glow Intensity',
    fraction: .75,
    range:[2,8],
    precision:0,
  }

];

preferences.forEach(function(o){
  if( $page.query[o.id] === undefined){
    // data was not present
  }else{
    // data is available, override the initial setting
    o.fraction = parseFloat( $page.query[o.id] );
  }
  //console.log(o.fraction);
})


$: baseUrl = '';
onMount(async function() {
  baseUrl = window.location.href.split('?')[0] + '?';
});

$: restore = baseUrl + preferences.map(o=>`${o.id}=${o.fraction}`).join('&');

// PREFERENCE DATA PROCESSING

$: configuration = preferences.reduce(function(map, obj) {
    map[obj.id] = obj;
    //if(!obj.range) obj.range = [0,100];
    if(!obj.value) obj.value = 0;
    if(!obj.precision) obj.precision = 0;
    if(obj.range) obj.value = (obj.range[0] + ((obj.range[1]-obj.range[0]) * obj.fraction)).toFixed(obj.precision);
    return map;
}, {});

// HELPER FUNCTIONS

function clamp(val, min, max, fix=0){
  return (min + ((max-min) * val)).toFixed(fix);
}

// CODE GENERATION

$: generation = [

  {
    name: 'background',
    variant: 'primary',
    declaration: {
      color: chroma('#649093').brighten( configuration.darkness.fraction ).hex(),
      backgroundColor: chroma('#1e3233').darken( configuration.darkness.fraction ).hex(),
    },
  },

  {
    name: 'background',
    variant: 'crt',
    declaration: {
      background: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))`,
      backgroundSize: `100% ${clamp(configuration.phosphor.fraction,2,8)}px, ${clamp(configuration.phosphor.fraction,3,12)}px 100%`,
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
      boxShadow: `inset 0 0 ${clamp(configuration.glow.fraction,2,22)}px #0f161b, 0 0 ${clamp(configuration.glow.fraction,2,12)}px #9ecaed`,
      borderRadius: `${clamp(configuration.glow.fraction,0,4)}px`,
    },
  },

  {
    name: 'glow',
    variant: 'large',
    requires:'glow',
    declaration: {
      boxShadow: `inset 0 0 ${clamp(configuration.glow.fraction,2,34)}px #0f161b, 0 0 ${clamp(configuration.glow.fraction,2,24)}px #9ecaed`,
      borderRadius: `${clamp(configuration.glow.fraction,0,20)}px`,
    },
  },

  {
    name: 'space',
    variant: 'small',
    declaration: {
      padding: `${clamp(configuration.space.fraction,0,.5,2)}rem`,
    },
  },

  {
    name: 'space',
    variant: 'large',
    declaration: {
      padding: `${clamp(configuration.space.fraction,1,3,2)}rem`,
    },
  },






];

let abbreviated = true;
let important = false;

function abbreviate(string){
  let result = string;

  if(string === 'small'){
    result = 'sm'
  }else if(string === 'large'){
    result = 'lg'
  }else if(string === 'background'){
    result = 'bg'
  }

  return result;
}
$: generated = generation.reduce(function(object, rule) {

    let name = null;
    if(rule.name){
      if(abbreviated){
        name = abbreviate(rule.name)
      }else{
        name = rule.name;
      }
    }

    let variant = null;
    if(rule.variant){
      if(abbreviated){
        variant = abbreviate(rule.variant)
      }else{
        variant = rule.variant;
      }
    }


    const ruleName = [name, variant].filter(i=>i).join('-');
    const propertyName = camelCase([rule.name, rule.variant].filter(i=>i).join('-'));

    object[propertyName] = rule;
    rule.selector = `.` + ruleName;
    rule.declarations = [];
    if(rule.requires) rule.declarations.push(`/* NOTE: requires "${rule.requires}" class: <div class="${rule.requires} ${ruleName}"></div> */`);
    rule.declarations = rule.declarations.concat( Object.keys(rule.declaration).map(property=>`${kebabCase(property)}: ${rule.declaration[property]}${important?' !important':''};`) )
    rule.code = `${rule.selector} {\n${rule.declarations.map(declaration=>'  '+declaration).join('\n')}\n}`;
    rule.preview = css`${rule.declarations.join('')}`;
    return object;
}, {});









// USED IN GENERATED CODE CODE
function highlightCss(code){
  return hljs.highlight('css', code).value
}

$: cssCode = highlightCss( `/* Restore or share current settings using: ${restore} */\n\n` + Object.keys(generated).map(key=>generated[key].code).join('\n\n') );


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
      <form class="{generated.backgroundCrt.preview} {generated.glow.preview} {generated.glowLarge.preview} {generated.spaceLarge.preview}">

            <h1>ENCOM: Flux Control</h1>
            <p>Media Connection</p>


            <section>
                <h2>Internet Protocol</h2>
                <fieldset class="{generated.spaceSmall.preview}">
                  <legend>Server Bypass Routes</legend>
                  <ul>
                      <li>
                        <label for="title_1">
                          <input type="radio" id="title_1" name="title" value="A">
                          Alfa Route
                        </label>
                      </li>
                      <li>
                        <label for="title_2">
                          <input type="radio" id="title_2" name="title" value="K" >
                          Mike Route
                        </label>
                      </li>
                      <li>
                        <label for="title_3">
                          <input type="radio" id="title_3" name="title" value="Q">
                          Foxtrot Route
                        </label>
                      </li>
                  </ul>
                </fieldset>
                <p class="{generated.spaceSmall.preview}">
                  <label for="address">
                    <span>Address: </span>
                  </label>
                  <input  class="{generated.backgroundPrimary.preview} {generated.glow.preview} {generated.glowSmall.preview} w-50" type="text" id="address" name="address" value="a4c2fdd3-77db-4ebe-b9dd-9ff54d4acdfa">
                </p>
                <p class="{generated.spaceSmall.preview}">
                  <label for="name">
                    <span>Username: </span>
                  </label>
                  <input  class="{generated.backgroundPrimary.preview} {generated.glow.preview} {generated.glowSmall.preview}" type="text" id="name" name="name" value="zerocool">
                </p>
                <p class="{generated.spaceSmall.preview}">
                  <label for="password">
                    <span>Password: </span>
                  </label>
                  <input  class="{generated.backgroundPrimary.preview} {generated.glow.preview} {generated.glowSmall.preview}" type="text" id="password" name="password" value="hunter2">
                </p>
            </section>

            <section>
                <p> <button class="{generated.backgroundPrimary.preview} {generated.glow.preview} {generated.glowSmall.preview}" type="button">Validate Root</button> </p>
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
          <label for="id{capitalize(preference.id)}"><small class="text-muted">{preference.label} ({configuration[preference.id].value||preference.fraction})</small></label>
          <div class="input-group mb-3">
            <div class="custom-control custom-range">
              <input type="range" class="w-100" bind:value={preference.fraction} min="0" max="1" step="0.01" id="id{capitalize(preference.id)}">
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

        <div class="p-2">
          Abbreviate Names <small class="text-muted">(activate for Bootstrap naming convention compatibility &middot; <span class="text-info">recommended</span>)</small>
          <input class="d-block" type=checkbox bind:checked={abbreviated}>
        </div>
        <div class="p-2">
          Use Force <small class="text-muted">(force override specificity)</small>
          <input class="d-block" type=checkbox bind:checked={important}>
        </div>

        <div class="mb-3 p-2">
        <small class="text-warning">Tip:</small> <small class="text-muted">Copy the code below into your CSS file.</small>
        </div>


<!--
        <pre class="mb-0 shadow">
        <code class="language-css css hljs">
        {JSON.stringify(generated,null,'  ')}
        </code>
        </pre> -->


        <pre class="mb-0 shadow">
        <code class="language-css css hljs">
        {@html cssCode}
        </code>
        </pre>

      </div>

  </div>

</div>
