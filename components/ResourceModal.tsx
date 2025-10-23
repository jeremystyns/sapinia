import React from 'react';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResourceModal: React.FC<ResourceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-lg font-bold text-gray-800">Ressources Pédagogiques - Loi Sapin 2</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Fermer">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <main className="p-6 overflow-y-auto text-gray-700 space-y-4">
          <p>Avant cette loi, c'était un peu le Far West. Certaines entreprises avaient des règles, d'autres non, et il était parfois difficile de savoir ce qui était permis ou non. La loi Sapin 2 est arrivée en 2016 pour mettre de l'ordre et dire : "Désormais, tout le monde doit suivre les mêmes règles pour éviter la triche (la corruption)".</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 border-b pb-2">Le but du jeu : la transparence et l'honnêteté</h3>
          <p>L'objectif principal de cette loi est de lutter contre la corruption. Imagine la corruption comme un "pot-de-vin" : donner un avantage à quelqu'un (de l'argent, un cadeau, un service) pour qu'il prenne une décision en ta faveur, même si ce n'est pas la meilleure décision pour son entreprise ou pour l'intérêt général.</p>
          <p>La loi Sapin 2 a trois grands objectifs :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Lutter contre la corruption :</strong> Empêcher les pots-de-vin et les arrangements malhonnêtes.</li>
            <li><strong>Rendre les choses transparentes :</strong> S'assurer que les décisions économiques sont prises de manière claire et juste.</li>
            <li><strong>Protéger les "lanceurs d'alerte" :</strong> Un lanceur d'alerte, c'est un salarié qui a le courage de dire "Attention, il se passe quelque chose d'illégal ici !". La loi le protège pour qu'il ne soit pas renvoyé ou puni pour avoir parlé.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 border-b pb-2">La "boîte à outils" obligatoire : les 8 piliers</h3>
          <p>Pour s'assurer que tout le monde respecte les règles, la loi oblige les entreprises concernées à mettre en place une "boîte à outils" composée de 8 mesures, qu'on appelle les "8 piliers de la loi Sapin 2". Voici ces 8 outils, expliqués simplement :</p>
          <ol className="list-decimal list-inside space-y-3 pl-4">
            <li><strong>Le Code de Conduite :</strong> Le "règlement intérieur" de l'éthique, définissant ce qui est permis et interdit.</li>
            <li><strong>Le Dispositif d'Alerte Interne :</strong> Une "boîte aux lettres" sécurisée pour signaler des activités suspectes.</li>
            <li><strong>La Cartographie des Risques :</strong> Une analyse pour identifier les zones à haut risque de corruption.</li>
            <li><strong>L'Évaluation des Tiers :</strong> Vérifier l'intégrité des partenaires, fournisseurs et clients.</li>
            <li><strong>Les Contrôles Comptables :</strong> S'assurer qu'aucune dépense ne masque un pot-de-vin.</li>
            <li><strong>La Formation :</strong> Former les salariés exposés aux risques (c'est vous !).</li>
            <li><strong>Le Régime Disciplinaire :</strong> Prévoir des sanctions en cas de non-respect du code de conduite.</li>
            <li><strong>Le Contrôle et l'Évaluation :</strong> Vérifier régulièrement l'efficacité des outils mis en place.</li>
          </ol>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 border-b pb-2">Les Parcours de Formation</h3>
          <p>La formation est structurée en trois parcours pour s'adapter à votre niveau d'expérience.</p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-bold text-gray-800">1. Le tronc commun (pour tous)</h4>
              <ul className="list-disc list-inside space-y-1 pl-4 mt-1">
                <li><strong>Connaître :</strong> Identifier les 3 objectifs principaux de la loi Sapin 2 (lutter, rendre transparent, protéger).</li>
                <li><strong>Comprendre :</strong> Expliquer en une phrase à quoi sert chacun des 8 piliers de la loi.</li>
                <li><strong>Appliquer :</strong> Reconnaître, dans une liste de situations, celles qui présentent un risque de corruption.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">2. Le parcours JUNIOR</h4>
               <ul className="list-disc list-inside space-y-1 pl-4 mt-1">
                <li><strong>Appliquer :</strong> Utiliser une checklist pour vérifier qu'un code de conduite contient toutes les mentions obligatoires.</li>
                <li><strong>Analyser:</strong> Classer par ordre de priorité des risques de corruption déjà identifiés dans un cas simple.</li>
                <li><strong>Appliquer :</strong> Utiliser un guide d'entretien fourni pour poser les bonnes questions lors d'une collecte d'informations.</li>
              </ul>
            </div>
             <div>
              <h4 className="font-bold text-gray-800">3. Le parcours SENIOR</h4>
               <ul className="list-disc list-inside space-y-1 pl-4 mt-1">
                <li><strong>Analyser :</strong> Repérer les erreurs classiques dans un projet de cartographie des risques réalisé par un junior.</li>
                <li><strong>Évaluer :</strong> Donner un feedback structuré à un junior en utilisant une grille d'évaluation simple.</li>
                <li><strong>Appliquer :</strong> Identifier une opportunité de conseil complémentaire à partir d'une synthèse de mission.</li>
              </ul>
            </div>
          </div>


          <p className="pt-4 border-t mt-6">En résumé, la loi Sapin 2 demande aux entreprises de ne plus être passives, mais de devenir des acteurs proactifs de la lutte contre la corruption. C'est pour cette raison que la formation est si importante : c'est l'outil qui permet de s'assurer que chaque salarié comprend les règles du jeu et devient, à son tour, un gardien de l'éthique de l'entreprise.</p>
        </main>
      </div>
    </div>
  );
};

export default ResourceModal;