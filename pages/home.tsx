import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import FeaturedSection from "../src/components/homeAuth/featuresSection";
import ListCategories from "../src/components/homeAuth/listCategories";
import NewestCategory from "../src/components/homeAuth/newestCategory";



const HomeAuth = function () {
    return (
        <>
        <Head>
            <title>Portfólio - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <FeaturedSection />
            <NewestCategory />
            <FavoriteCategory />
            <FeaturedCategory />
            <ListCategories />
        </main>
        </>
    );
};

export default HomeAuth;