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
    error: boolean
    amount: number
    jokes: SingleJoke[] | TwoPartJoke[]
}

export const clientLoader = async ({request} : ClientLoaderFunctionArgs): Promise<Jokes | undefined> => {
    const url = new URL(request.url)

    const searchParams = new URLSearchParams()
    for (const [key, value] of url.searchParams.entries()) {
        searchParams.append(key, value)
    }

    const res = await fetch(`https://v2.jokeapi.dev/joke/Any?amount=10&${searchParams.toString()}`, {
         headers: { 'Accept': 'application/json'}
    })

    return await res.json() as Jokes
}