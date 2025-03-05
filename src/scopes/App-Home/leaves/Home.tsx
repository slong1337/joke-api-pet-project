import { HomeFilters } from '@/scopes/App-Home/components/HomeFilters/HomeFilters'
import { JokeCard } from '@/scopes/App-Home/components/JokeCard/JokeCard'
import { clientLoader } from '@/scopes/App-Home/leaves/Home.loader'
import { useLoaderData } from '@remix-run/react'

export function Home() {
    const data = useLoaderData<typeof clientLoader>()
    return (
        <>
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-center my-6">
                    Добро пожаловать на наш сайт шуток!
                </h1>

                <p className="font-medium text-lg mb-4">
                    Здесь вы всегда найдете свежие, остроумные и забавные шутки на любой вкус. Хотите поднять настроение? Просто введите запрос, и мы подберем для вас лучшие шутки!
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-6 mb-2">Как это работает?</h2>
                <p className="font-medium text-lg mb-4">
                    Очень просто! Выберите категории, настройте фильтры и введите слово или фразу, чтобы найти шутки, которые вам подойдут.
                    Например: выберите категорию «Программирование» и введите «Python», или настройте фильтр «Черный юмор» и найдите что-то по настроению.
                    Наш сайт подберет лучшие шутки именно для вас!                
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-6 mb-2">Что вас ждет?</h2>

                <div className='flex flex-col'>
                    <div className="flex items-start gap-2 flex-col">
                        <h3 className="font-semibold text-lg sm:text-xl before:content-['•'] before:mr-2">
                            Шутки по категориям
                        </h3>
                        <p className="font-normal text-base">
                            Выбирайте, что вам ближе: от юмора о профессиях до мемов о животных.
                        </p>
                    </div>

                    <div className="flex items-start gap-2 my-4 flex-col">
                        <h3 className="font-semibold text-lg sm:text-xl before:content-['•'] before:mr-2">
                            Рандомные шутки
                        </h3>
                        <p className="font-normal text-base">
                            Если не знаете, что выбрать, не переживайте, мы сами подберем вам что-то смешное!
                        </p>
                    </div>
                </div>

                <p className=" text-m">
                    Заглядывайте к нам, когда нужно поднять настроение, рассмешить друзей или просто поразвлечься. <br />
                    Смех продлевает жизнь — и мы с этим согласны!
                </p>
            </div>
            
            <div>

                <HomeFilters/>

            </div>

            {data && (
                <JokeCard data={data}/>
            )}
        </>
    )
}
