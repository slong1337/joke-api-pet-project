
import { Jokes } from '@/scopes/App-Home/leaves/Home.loader'

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
                            <>{item.joke}</>
                        ) : (
                            <>- {item.setup} <br/> - {item.delivery}</>
                        )}
                    </p>
                ))}
            </p>
        </div>
    )
}
