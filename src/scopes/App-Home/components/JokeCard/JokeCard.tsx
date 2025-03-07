import { type Jokes, type JokesError } from '@/scopes/App-Home/leaves/Home.loader'

export type JokeCardProps = {
    data: Jokes | JokesError
}


const JokeFlags = (item: { flags: Record<string, boolean> }) => {
    return (
      <ul>
        {Object.entries(item.flags).map(([key, value]) => (
          <li key={key}>
            {key}: {value ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    );
  };

export const JokeCard = (props: JokeCardProps) => {
    const { data } = props
    return (
        <>
            {!data.error ? (
                <div className="mt-6 max-w-3xl sm:mx-auto px-2 text-lg">
                    {data.jokes.map((item) => (
                        <div className="mb-4 my-6 mx-auto" key={item.id}> 
                            {item.type === 'single' ? (
                            <>
                                <p>{item.joke}</p>
                                 <JokeFlags flags={item.flags} />
                            </>
                            ) : (
                                <div className="space-y-2 rounded">
                                    <p>- {item.setup}</p>
                                    <p>- {item.delivery}</p>
                                    <JokeFlags flags={item.flags} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className='border rounded-t-lg bg-red-100 mt-2'>
                    <div className="my-4 px-4 py-4 mx-auto max-w-3xl flex justify-center">
                        <p className="text-lg text-red-600">
                            Ошибка: {data.message}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
