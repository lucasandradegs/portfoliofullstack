import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../src/components/common/footer";
import HeaderAuth from "../src/components/common/headerAuth";
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import FeaturedSection from "../src/components/homeAuth/featuresSection";
import ListCategories from "../src/components/homeAuth/listCategories";
import NewestCategory from "../src/components/homeAuth/newestCategory";
import { useState, useEffect } from "react";
import PageSpinner from "../src/components/common/spinner";



const HomeAuth = function () {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(!sessionStorage.getItem('portfolio-token')){
            router.push("/login")
        } else {
            setLoading(false);
        }
    },[]);

    if (loading) {
        return <PageSpinner />
    }

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
            <Footer />
        </main>
        </>
    );
};

export default HomeAuth;