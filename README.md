

## unshared parameters between instances

### color axes Map

add axes colors Map in global/_params.ts file (untracked with git)

```ts
import {AxesClassColor} from "~/global/getClassColorUidFromAxesUid";

export type AxesUid =
    'metiers-de-la-musique'
    | 'musique-et-technologie'
    | 'musique-et-societe'
    | 'interpretation-historique'
    | 'transmission'
    | 'musique-du-monde'

export const axeColorMap: Map<AxesUid, AxesClassColor> = new Map([
    ['metiers-de-la-musique',       'green'],
    ['musique-et-technologie',      'yellow'],
    ['musique-et-societe',          'purple'],
    ['interpretation-historique',   'dark-green'],
    ['transmission',                'orange'],
    ['musique-du-monde',            'brick'],
])

```

### api  base url

```ts
export const hemApiBaseUrl = 'https://admin.hem-rad.ch/webapp/api/v1'
// export const hemApiBaseUrl = 'http://localhost:8000/webapp/api/v1'
```


### site title

```ts
export const siteTitle = "Plateforme Recherche HEM"
```
