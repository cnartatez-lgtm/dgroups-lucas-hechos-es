// Introducción común; el texto propio de cada comentario se conserva.
export const commentaryPreface = 'Estos comentarios nacen del pasaje de esta semana. No son obligatorios ni son lo principal. Están aquí para ayudar, como un apoyo adicional para el estudio. Pueden usarlos o no, y elegir el punto que mejor acompañe la conversación de su grupo. No necesitan abarcarlo todo. Lo más importante es leer el pasaje, orar, estudiarlo juntos y dejar que llegue al corazón, para responder a Dios en obediencia a su Palabra. Cada punto también abre otros temas que pueden explorar, según el tiempo y las fuerzas que tengan. Nuestra oración es que Dios los guíe, les dé sabiduría y produzca fruto de su tiempo en su Palabra.';
export const commentaryAuthority = 'Solo la Biblia es inspirada por Dios. Estos comentarios son reflexiones humanas; léanlos siempre bajo la autoridad de la Palabra de Dios.';
export function commentaryIntroduction(introduction='') {
 const blocks=String(introduction).split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean);
 if(blocks[0]==='Antes de comenzar')blocks.shift();
 if(blocks[0]===commentaryPreface || blocks[0]?.startsWith('Estos comentarios nacen del pasaje de esta semana.'))blocks.shift();
 if(blocks[0]===commentaryAuthority)blocks.shift();
 return blocks.join('\n\n');
}
