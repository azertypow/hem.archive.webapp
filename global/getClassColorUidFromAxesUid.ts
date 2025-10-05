export type AxesUid =
    'interpretation-instrumentale-et-vocale'
    | 'musique-et-mouvement'
    | 'musique-ancienne'
    | 'ethnomusicologie'
    | 'composition-et-theorie'
    | 'disciplines-transversales'


export type AxesClassColor = 'green' |'yellow' |'purple' |'dark-green' |'orange' |'brick'

export function getClassColorUidFromAxesUid(themeUid?: AxesUid): AxesClassColor {

    if(themeUid === undefined) return 'interpretation-historique' as AxesClassColor

    if(themeUid === 'ethnomusicologie')
        return 'dark-green'
    if(themeUid === 'interpretation-instrumentale-et-vocale')
        return 'green'
    if(themeUid === 'musique-et-mouvement')
        return 'yellow'
    if(themeUid === 'musique-ancienne')
        return 'purple'
    if(themeUid === 'composition-et-theorie')
        return 'orange'

    // 'disciplines-transversales' and default
        return 'brick'
}


export type AxesClassColorShort = 'g' |'y' |'p' |'dg' |'o' |'b'

export type AxesClassColorMap = {
    [key: string]: AxesClassColor;
};

const correspondanceLettres: AxesClassColorMap = {
    'g': 'green',
    'y': 'yellow',
    'p': 'purple',
    'dg': 'dark-green',
    'o': 'orange',
    'b': 'brick',
};

export function getAxeClassColorFromShortedLetter(lettre: AxesClassColorShort): AxesClassColor | undefined {
    return correspondanceLettres[lettre] || undefined;
}

// Fonction pour trouver une correspondance de valeur à clé
export function getShortedLetterFromAxeClassColor(valeur: AxesClassColor): AxesClassColorShort | undefined {

    const toReturn = Object.entries(correspondanceLettres).find(
        ([_, word]) => word === valeur
    ) as [AxesClassColorShort, AxesClassColor] | undefined

    return  toReturn ? toReturn[0] : undefined
}
