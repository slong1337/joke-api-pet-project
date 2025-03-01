import { SingleJoke, TwoPartJoke } from '@/routes/api.joke'

export type JokeCardProps = {
    data: SingleJoke | TwoPartJoke
}

export const JokeCard = (props: JokeCardProps ) => {
    const {data} = props

    return (
        <div className="border rounded-xl mt-6 px-6 py-4">
            <p className="text-lg">
                {data.type === 'single' ? (
                    <>{data.joke}</>
                ) : (
                    <></>
                )}
            </p>
        </div>
    )
}
