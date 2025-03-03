
import { Jokes } from '@/scopes/App-Home/leaves/Home.loader'
import { it } from 'node:test'

export type JokeCardProps = {
    data: Jokes
}

export const JokeCard = (props: JokeCardProps) => {
    const { data } = props

    return (
        <div className="border rounded-xl mt-6 px-6 py-4">
            <p className="text-lg">
                {data.jokes.map((item, i) => (
                    <p className="mb-4">
                        {item.type === 'single' ? (
                            <>{item.joke} {item.category}</>
                        ) : (
                            <>- {item.setup} <br/> - {item.delivery} {item.category}</>
                        )}
                    </p>
                ))}
            </p>
        </div>
    )
}
