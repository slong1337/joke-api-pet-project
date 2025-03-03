import { HomeFilters } from '@/scopes/App-Home/components/HomeFilters/HomeFilters'
import { JokeCard } from '@/scopes/App-Home/components/JokeCard/JokeCard'
import { clientLoader } from '@/scopes/App-Home/leaves/Home.loader'
import { useLoaderData } from '@remix-run/react'

export function Home() {
    const data = useLoaderData<typeof clientLoader>()
    return (
        <>
            <div className="mx-6 my-4 flex">
                <div className="">

                    <div className="flex rounded-2xl">
                        <h1 className=" font-bold text-2xl max-w-2xl ">Добро пожаловать на наш сайт шуток!</h1>
                    </div>

                    <p className=" font-medium max-w-2xl py-2">Здесь вы всегда найдете свежие, остроумные и забавные шутки налюбой вкус.
                        Хотите поднять настроение? Просто введите запрос, и мы подберем для вас лучшие шутки!
                    </p>

                    <h2 className=" font-bold text-2xl ">Как это работает?</h2>

                    <p className=" font-medium max-w-2xl py-2">Очень просто! Введите слово или фразу, и наш сайт подберет шутки,
                        связанные с вашим запросом. Пример: «шутки о программистах»,
                        «шутки про жизнь» или «черный юмор» — мы найдем то, что вам нужно.
                    </p>

                    <h2 className=" font-bold text-2xl ">Что вас ждет?</h2>

                    <div>

                        <div className=" flex items-center my-2 ">

                            <h3 className=" font-semibold text-xl ">Шутки по категориям -</h3>

                            <p className="font-normal text-base px-2">выбирайте, что вам ближе: от юмора о профессиях до мемово животных.</p>
                            
                        </div>

                        <div className=" flex items-center my-4">

                            <h3 className=" font-semibold text-xl">Рандомные шутки - </h3>

                            <p className="font-normal text-base">если не знаете, что выбрать, не переживайте, мы сами подберем вам что-то смешное!</p>

                        </div>

                    </div>

                    <p>
                        Заглядывайте к нам, когда нужно поднять настроение, рассмешить друзей или просто поразвлечься. <br />
                        Смех продлевает жизнь — и мы с этим согласны!
                    </p>

                </div>

                <HomeFilters/>

            </div>

            {data && (
                <JokeCard data={data}/>
            )}
        </>
    )
}
