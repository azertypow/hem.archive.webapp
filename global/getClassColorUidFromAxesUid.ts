export type AxesUid =
    'metiers-de-la-musique'
    | 'musique-et-technologie'
    | 'musique-et-societe'
    | 'interpretation-historique'
    | 'transmission'
    | 'musique-du-monde'


export type AxesClassColor = 'green' |'yellow' |'purple' |'dark-green' |'orange' |'brick'

export function getClassColorUidFromAxesUid(themeUid?: AxesUid): AxesClassColor {

    if(themeUid === undefined) return 'interpretation-historique' as AxesClassColor

    if(themeUid === 'interpretation-historique')
        return 'dark-green'
    if(themeUid === 'metiers-de-la-musique')
        return 'green'
    if(themeUid === 'musique-et-technologie')
        return 'yellow'
    if(themeUid === 'musique-et-societe')
        return 'purple'
    if(themeUid === 'transmission')
        return 'orange'

    // 'musique-du-monde' and default
        return 'brick'
}
