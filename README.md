# Alpine JS Table of Content

Generate a table of content from headings within an element 📖

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-table-of-content@latest/dist/toc.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-table-of-content

npm install -D alpinejs-table-of-content
```

```js
import Alpine from 'alpinejs'
import toc from 'alpinejs-table-of-content'

Alpine.plugin(toc)

Alpine.start()
```

## Example

```html
<article
  class="prose mx-auto"
  x-data="{ tableOfContent: [] }"
  x-table-of-content
>
  <h1 id="heading-1">Heading 1</h1>

  <template x-if="tableOfContent.length">
    <ul class="not-prose list-disc">
      <template
        x-for="{ headingId, headingChildren, textContent } in tableOfContent"
      >
        <li>
          <a :href="`#${headingId}`" x-text="textContent"> </a>

          <template x-if="headingChildren.length">
            <ul class="list-disc ml-4">
              <template
                x-for="{ headingId, headingChildren, textContent } in headingChildren"
              >
                <li>
                  <a :href="`#${headingId}`" x-text="textContent"> </a>

                  <template x-if="headingChildren.length">
                    <ul class="list-disc ml-4">
                      <template
                        x-for="{ headingId, headingChildren, textContent } in headingChildren"
                      >
                        <li>
                          <a :href="`#${headingId}`" x-text="textContent"> </a>
                        </li>
                      </template>
                    </ul>
                  </template>
                </li>
              </template>
            </ul>
          </template>
        </li>
      </template>
    </ul>
  </template>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, commodi.
  </p>

  <h2 id="heading-2">Heading 2</h2>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  <h3 id="heading-3">Heading 3</h3>

  <p>Lorem, ipsum dolor.</p>

  <h4 id="heading-4">Heading 4</h4>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt alias,
    possimus mollitia nisi pariatur vero numquam at iure labore! Labore est
    laudantium nam voluptates laborum, inventore delectus dolore placeat impedit
    quae?
  </p>

  <h3 id="heading-3.1">Heading 3.1</h3>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit
    unde, pariatur dolore, eveniet consectetur eligendi tempora dolor nesciunt
    cumque quis repellendus, voluptate perspiciatis eaque quibusdam?
  </p>

  <h2 id="heading-2.1">Heading 2.1</h2>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque ratione.
    Mollitia placeat vitae voluptas!
  </p>

  <h2 id="heading-2.2">Heading 2.2</h2>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima
    harum ipsam!
  </p>

  <h3 id="heading-3.2">Heading 3.2</h3>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a est porro
    facilis nam commodi ullam fugiat? Quisquam reprehenderit incidunt sint ad
    facilis ducimus est rerum? Non commodi tempore provident.
  </p>
</article>
```

All you need is the `x-table-of-content` directive and a `tableOfContent: []`
within the `x-data` of the same element. Exactly as shown in the example.

From there, Alpine JS will read the content within the element with the
`x-table-of-content` directive and locate all the H2, H3 and H4 elements.
Generating a nested array of objects which parent and child relationships.
Within these objects you'll have:

- `headingId` (Comes from the `id` attribute on the heading - Useful for jump
  links)
- `headingChildren` (If the heading has child headings, these will appear here)
- `textContent` (The text content of the heading)

In the example above there is this piece of HTML:

```html
<template x-if="tableOfContent.length">
  <ul class="not-prose list-disc">
    <template
      x-for="{ headingId, headingChildren, textContent } in tableOfContent"
    >
      <li>
        <a :href="`#${headingId}`" x-text="textContent"> </a>

        <template x-if="headingChildren.length">
          <ul class="list-disc ml-4">
            <template
              x-for="{ headingId, headingChildren, textContent } in headingChildren"
            >
              <li>
                <a :href="`#${headingId}`" x-text="textContent"> </a>

                <template x-if="headingChildren.length">
                  <ul class="list-disc ml-4">
                    <template
                      x-for="{ headingId, headingChildren, textContent } in headingChildren"
                    >
                      <li>
                        <a :href="`#${headingId}`" x-text="textContent"> </a>
                      </li>
                    </template>
                  </ul>
                </template>
              </li>
            </template>
          </ul>
        </template>
      </li>
    </template>
  </ul>
</template>
```

This is looping through the `tableOfContent` and generating the nested list for
the user to use to jump to, or just view the headings within the content.

_This example uses Tailwind CSS, this is not required._

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-table-of-content)
![](https://img.shields.io/npm/v/alpinejs-table-of-content)
![](https://img.shields.io/npm/dt/alpinejs-table-of-content)
![](https://img.shields.io/github/license/markmead/alpinejs-table-of-content)
