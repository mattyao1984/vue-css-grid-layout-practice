<template>
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/simple-grid-layout">Simple Grid Layout</a>
      </li>
      <li>
        <a href="/grid-row-col">Grid Row Col</a>
      </li>
      <li>
        <a href="/named-grid-lines">Named Grid Lines</a>
      </li>
    </ul>
  </nav>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
  position: fixed;
  top: 10px;
  right: 20px;

  ul {
    li {
      list-item: none;
      display: inline-block;

      a {
        margin: 0 10px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
