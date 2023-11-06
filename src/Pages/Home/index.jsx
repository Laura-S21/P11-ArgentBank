import Banner from "../../Components/Banner"
import FeatureItem from "../../Components/FeatureItem"
import featuresList from "../../datas/features.json"

function Home() {
    return (
        <>
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {featuresList.map((feature) => (
                    <FeatureItem 
                        key={feature.id}
                        img={feature.img}
                        title={feature.title}
                        text={feature.text}
                    />
                ))}
            </section>
        </>
    )
}

export default Home