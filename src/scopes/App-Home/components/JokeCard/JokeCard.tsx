import { type Jokes, type JokesError } from '@/scopes/App-Home/leaves/Home.loader'

export type JokeCardProps = {
    data: Jokes | JokesError
}

export const JokeCard = (props: JokeCardProps) => {
    const { data } = props
    return (
        <>
            {!data.error ? (
                <div className="border rounded-xl mt-6 px-6 py-4">
                    <div className="text-lg">
                        {data.jokes.map((item) => (
                            <p className="mb-4" key={item.id}>
                                {item.type === 'single' ? (
                                    <>{item.joke} {item.category}</>
                                ) : (
                                    <>- {item.setup} <br/> - {item.delivery} {item.category}</>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="border rounded-xl mt-6 px-6 py-4">
                    <p className="text-lg text-red-600">
                        Error: {data.message}
                    </p>
                </div>
            )}
        </>
    )
}
