import Image from 'next/image'

export const Card = ({ image, title }: CardProps) => {
    if (Array.isArray(image))
        return (
            <div id="card">
                <h1>{title}</h1>
                <div id="card-grid">
                    <div>
                        <Image alt={image[0].alt} title={image[0].alt} width={150} height={116} src={image[0].url} />
                        <p>{image[0].text}</p>
                    </div>

                    <div>
                        <Image alt={image[1].alt} title={image[1].alt} width={150} height={116} src={image[1].url} />
                        <p>{image[1].text}</p>
                    </div>
                    <div>
                        <Image alt={image[2].alt} title={image[2].alt} width={150} height={116} src={image[2].url} />
                        <p>{image[2].text}</p>
                    </div>
                    <div>
                        <Image alt={image[3].alt} title={image[3].alt} width={150} height={116} src={image[3].url} />
                        <p>{image[3].text}</p>
                    </div>

                </div>
                <a className="see-more truncate-1line" href="#">See all offers</a>
            </div>
        )
    else return (
        <div id="card">
            <h1>{title}</h1>
            <Image style={{ height: "285px", objectFit: "cover" }} title={image.alt} width={344} height={300} src={image.url} alt={image.alt} />
            <a className="see-more truncate-1line" href="#">See all offers</a>
        </div>
    )
}

type CardProps = {
    image: Image | Image[]
    title: string
}

interface Image {
    url: string;
    alt: string;
    text?: string
}