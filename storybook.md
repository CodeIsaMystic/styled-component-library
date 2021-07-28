<div align="center" >
  <img src="https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2020/07/24065942/open-graph-1.png"
  style="width: 650px; height: auto;" >
</div>

<br>
<br>

## Storybook

Link to the [storybook website](https://storybook.js.org/).
And here the [documentation](https://storybook.js.org/docs/react/get-started/introduction).

### Documenting Components with Storybook

**Initiate storybook with the following command**

``npx -p @storybook/cli sb init``

It will **set all the configuration**, setup in a new directory called stories with 2 different stories, alter a new package.json for this command (build & dev server).

Storybook is a nice tool ***for development, used for a project even for developer teams***.

<br>
<br>

**The new Storybook scripts on package.json**

```json
  "storybook": "start-storybook -p 6006 -s public",
  "build-storybook": "build-storybook -s public"
```

**We can look at the various stories by default**

A "button, header, intro and page" stories by default on the company theme they propose.

**Deleting all there stories to customize our own**.

