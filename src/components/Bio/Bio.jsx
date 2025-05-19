import './Bio.scss'

function Bio() {
    return (
        <div className='bio' id='bio'>
            <h2 className='sous-titre'>Qui suis-je?</h2>
            <p className='presentation'>Bonjour ! Je suis Joel. Actuellement en reconversion professionnelle pour devenir développeur web, je viens de terminer ma formation avec OpenClassrooms. J’y ai appris les bases des langages web (HTML, CSS, JavaScript), ainsi que la création d’API, la gestion de données, l’optimisation de sites et la création avec React. De plus, ayant un Bac Pro en Production Graphique, je maîtrise également des outils comme Photoshop, Illustrator et InDesign.</p>
            <p className='presentation'>Je suis à l'aise avec les technologies et motivé par une curiosité sans cesse grandissante. Ma passion pour le développement Front-End, en particulier avec React, me pousse à explorer de nouvelles possibilités. Vous trouverez <a href="#portfolio" title="Saut vers Portfolio">ci-dessous</a> quelques projets sur lesquels j’ai eu la chance de travailler durant ma formation.</p>
            <p className='presentation'>En parallèle, je suis un passionné de cinéma et co-créateur <a href="https://eteindezlalumiere.com" target="_blank" rel="noopener noreferrer" title="Lien vers le site web du podcast">d’un podcast dédié</a>. Dans ce projet indépendant, je porte plusieurs casquettes en tant que co-animateur, monteur et responsable de la maintenance du site web.</p>
        </div>
    )
}

export default Bio