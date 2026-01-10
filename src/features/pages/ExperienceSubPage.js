import { useParams } from "react-router-dom";
import { content } from "@/config";
import { Helmet } from "react-helmet";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import './styles/experiencesub.css'

export default function ExperienceSubPage() {
    
    const { slug } = useParams();
    const containerRef = useRef(null);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    useEffect(() => {
        try {
            const experience = content.experiences.find((c) => c.slug === slug);
            if (!experience) throw new Error("Experiencia no encontrada");
            setData(experience);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [slug]);

    if (loading) return <h2>Cargando...</h2>;
    if (error) return <h3>{error.message}</h3>;

    return (
    
        <>
            <Helmet>
                <title>{`${data.tourName} | Kintu Travel Expeditions`}</title>
                <meta name="description" content={`${data.experienceName}. Experiencia de bienestar y naturaleza en Perú.`}/>
                <meta property="og:title" content={data.tourName} />
                <meta property="og:description" content={data.experienceName} />
                <meta property="og:image" content={`/images/${data.id}/cover.jpg`}/>
                <meta property="og:type" content="website" />
            </Helmet>

            <div ref={containerRef}>
                {data.images.map((img, index) => (
                    <section key={index} className={`--section-wallper --section-wallper-${index}`}>
                        <motion.img src={`/images/${data.id}/${img}`} alt={`Foto de referencial de la experiencia ${data.experienceName} en el tour ${data.tourName} con ${content.companyInfo.brandName}`} style={{width: "100%", height: "100%", objectFit: "cover", scale}} loading={index === 0 ? "eager" : "lazy"}/>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="--wallper">
                            {index === 0 && (
                                <>
                                    <h2 className="text-4xl md:text-5xl">{data.tourName}</h2>
                                    <p>{data.experienceName}</p>
                                </>
                            )}

                            {index === 1 && (
                                <>
                                    <h2 className="text-4xl md:text-5xl">Destinos</h2>
                                    <p>{data.destinations.join(" · ")}</p>
                                </>
                            )}

                            {index === 2 && (
                                <>
                                    <h2 className="text-4xl md:text-5xl">Duración</h2>
                                    <p>{data.duration}</p>
                                </>
                            )}

                            {index === 3 && (
                                <>
                                    <h2 className="text-4xl md:text-5xl">Actividades</h2>
                                    <p>{data.activities.slice(0, 5).join(" · ")}</p>
                                </>
                            )}

                            {index === 4 && (
                                <>
                                    <h2 className="text-4xl md:text-5xl">Disponibilidad</h2>
                                    <p>{data.availability}</p>
                                </>
                            )}
                        </motion.div>
                    </section>
                ))}
            </div>
        </>
    );
}