import { LoaderFunctionArgs } from '@remix-run/router'

export type JokeBase = {
    error: boolean
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

export type Joke = SingleJoke | TwoPartJoke

export const loader = async ({request, params} : LoaderFunctionArgs): Promise<Joke | undefined> => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any', {
         headers: { 'Accept': 'application/json'}
    })
    return await res.json()

}
