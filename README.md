## Connect with Sanity 
### Install libraries
```
npm install sanity next-sanity
```

### Config Sanity 
Create asanity.config.ts file 

```
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure'

const config = defineConfig({
    projectId: "mk3jpe3b",
    dataset: "production",
    title: "My Personal Portfolio",
    apiVersion: "2024/07/07",
    basePath: "/admin",
    plugins: [structureTool()]
})
```

Next add and admin path

Add new folder named sanity 
