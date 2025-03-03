import { ClientLoaderFunctionArgs } from '@remix-run/server-runtime/dist/routeModules'

export type JokeBase = {
    category: string
    flags: {
        nsfw: boolean
        religious: boolean
        political: boolean
        racist: boolean
        sexist: boolean
        explicit: boolean
    },
    safe: boolean
    id: number
    lang: string
}

export type SingleJoke = JokeBase & {
    type: "single"
    joke: string
}

export type TwoPartJoke = JokeBase & {
    type: "twopart"
    setup: string
    delivery: string
}

export type Jokes = {
    error: false
    amount: number
    jokes: SingleJoke[] | TwoPartJoke[]
}

export type JokesError = {
    error: true
    internalError: boolean
    code: number
    message: string
    causedBy: Array<string>
    additionalInfo: string
    timestamp: number
}

export const clientLoader = async ({request} : ClientLoaderFunctionArgs): Promise<Jokes | JokesError | undefined> => {
    const url = new URL(request.url)

    // Из строки url мы берем все параметры поиска и записываем их в const searchParams
    const searchParams = new URLSearchParams()
    for (const [key, value] of url.searchParams.entries()) {
        searchParams.append(key, value)
    }

    searchParams.append('amount', '10')

    const category = searchParams.get('category')
    searchParams.delete('category')

    const baseUrl = `https://v2.jokeapi.dev/joke/${category}?`

    const res = await fetch(`${baseUrl}${searchParams.toString()}`, {
         headers: { 'Accept': 'application/json'}
    })

    return await res.json()
}
