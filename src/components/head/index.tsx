import { Helmet, HelmetProvider } from "react-helmet-async";

type metaTagsType = {
    title: string,
    description: string,
    image: string,
}

export function MetaTagsSEO({ title, description, image }: metaTagsType) {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta property="og:description" content={description} />
                <meta property="og:title" content={title} />
                <meta name="description" content={description} />
                <meta property="og:image" content={image} />
            </Helmet>
        </HelmetProvider>
    )
}