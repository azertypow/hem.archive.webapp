import {axeColorMap, AxesUid} from "~/global/_params";


export type AxesClassColor = 'green' |'yellow' |'purple' |'dark-green' |'orange' |'brick'

export function getClassColorUidFromAxesUid(themeUid?: AxesUid): AxesClassColor {

    if( themeUid === undefined ) return 'brick'

    return axeColorMap.get(themeUid) || 'brick'
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
