import { client, getClient } from "@/src/lib/client";
import { Article } from "@/src/lib/prepr/schema/generatedTypes";
import GetArticleById from "@/src/queries/fetch-article";
import GetArticleByIdHeader from "@/src/queries/fetch-article-header";
import { mapLocale } from "@/src/utils/mapLocales";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import { uuid } from "uuidv4";

async function getDataHeader(id: string) {
  const {
    data: { Article },
  } = await getClient().query({
    query: GetArticleByIdHeader,
    variables: {
      id,
    },
  });
  // Return the article from the query results
  return Article;
}

async function getData(id: string, locale: string) {
  const { data } = await client.query({
    query: GetArticleById,
    variables: {
      id,
      locale,
    },
  });

  // Return the article from the query results
  return data.Article;
}

export default async function ArticlePage(props: any) {
  const c: any = cookies();

  // Get the slug from the URL params
  const locale: string = props.params.locale;

  // Set values of cookies and headers to display
  const headerLocale = headers().get("x-next-intl-locale");
  const acceptHeader = headers().get("Accept-Language");
  const nextLocale = c.get("NEXT_LOCALE");

  // Fetch articles with different methods
  const article: Article = await getData(
    "d6bd07d2-b251-4e27-ad13-893c81b8b347",
    mapLocale(locale)
  );
  const headerArticle: Article = await getDataHeader(
    "d6bd07d2-b251-4e27-ad13-893c81b8b347"
  );

  const usedArticle = article;

  return (
    <div className="article mx-5 my-5 flex flex-row">
      <div className="w-1/2">
        <button
          className="font-bold text-purple-600 border-2 rounded-md border-purple-600 cursor-pointer p-2
        hover:bg-purple-600 hover:text-white"
        >
          <Link locale="en" href="/en">
            Switch to English
          </Link>
        </button>

        <button
          className="font-bold text-purple-600 border-2 rounded-md border-purple-600 cursor-pointer p-2 m-5
         hover:bg-purple-600 hover:text-white "
        >
          <Link locale="nl" href="/nl">
            Switch to Nederlands
          </Link>
        </button>

        <h1> Detected locale: {locale}</h1>

        <h1> mapLocales(): {mapLocale(locale)}</h1>

        <h1> next-intl header: {headerLocale}</h1>

        <h1> NEXT_LOCALE cookie: {nextLocale.value}</h1>

        <h1> Accept-Language header: {acceptHeader}</h1>
      </div>

      <div className="w-1/2">
        {usedArticle.content?.map((contentType) => {
          if (
            contentType?.__typename === "Assets" &&
            contentType.items?.length
          ) {
            return (
              <>
                <div
                  key={uuid()}
                  className="w-full h-80 flex items-center justify-center rounded-lg overflow-hidden mb-5"
                  style={{
                    backgroundImage: `url(${contentType.items[0]?.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-full h-full flex  justify-center items-center backdrop-brightness-75">
                    <span className="text-white text-4xl w-1/2 text-center font-bold">
                      {usedArticle.title}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-start">
                  <hr className="w-full mb-5 h-0.5 border-t-0 bg-zinc-800 opacity-60 dark:opacity-50" />
                </div>
              </>
            );
          }

          // Display text as HTML
          if (contentType?.__typename === "Text") {
            return (
              <div
                key={uuid()}
                className={contentType._id}
                dangerouslySetInnerHTML={{ __html: contentType.body! }}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
}