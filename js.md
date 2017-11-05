---
title: JSON
customjs:
 - /test.js
---
# Javascript in Markdown

### Follow these steps to embed JavaScript in your Github Pages Markdown:

1. In your header add links to the javascript files

```
---
title: JSON
customjs:
 - /test.js
---
```

1. Add the link to the script in your default html template:

```
{% for js in page.customjs %}
 <script async type="text/javascript" src="{{ js }}"></script>
{% endfor %}
```


### You can also embed Javascript directly into Markdown:

```
<script>
alert("Example");
</script>
```

<div id="data"></div>