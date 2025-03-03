import { ClientLoaderFunctionArgs } from '@remix-run/server-runtime/dist/routeModules'
import { useState } from 'react';


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

const [selectedCategory, setSelectedCategory] = useState<string>('Any')
const baseUrl = `https://v2.jokeapi.dev/joke/${selectedCategory}`;



export const clientLoader = async ({request} : ClientLoaderFunctionArgs): Promise<Jokes | undefined> => {
    const url = new URL(request.url)

    const searchParams = new URLSearchParams()
    for (const [key, value] of url.searchParams.entries()) {
        searchParams.append(key, value)
    }

// Создаем копию параметров
    const params = new URLSearchParams(searchParams);

// Удаляем amount, если он есть (чтобы избежать дублирования)
    params.delete("amount");

// Добавляем amount в конец
    params.append("amount", "10");

    const res = await fetch(`${baseUrl}?${params.toString()}`, {
         headers: { 'Accept': 'application/json'}
    })

    return await res.json() as Jokes
}
