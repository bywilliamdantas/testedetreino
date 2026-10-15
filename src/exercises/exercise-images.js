/* Imagens ilustrativas dos exercícios.
   Fonte: yuhonas/free-exercise-db (domínio público, Unlicense) — cada exercício tem 2 fotos
   (0 = posição inicial, 1 = posição final).

   Como funciona:
   - EXERCISE_IMAGE_MAP liga o NOME do exercício (como está em EXERCISE_LIBRARY) ao id da pasta
     no free-exercise-db. Nome sem entrada aqui (ou exercício próprio do usuário) = ícone padrão.
   - As imagens são procuradas em ordem: 1) ./exercise-images/ (cópia local, funciona offline e é
     guardada pelo service worker); 2) CDN do GitHub. Se nenhuma carregar, vira ícone.
   - `npm run imagens:verificar` confere os ids contra o banco real e lista o que falta;
     `npm run imagens:baixar` copia as fotos para public/exercise-images/. */

export const EXERCISE_IMAGE_SOURCES = [
  "./exercise-images/",
  "https://cdn.jsdelivr.net/gh/yuhonas/free-exercise-db@main/exercises/"
];

/* nome (como na biblioteca) -> id no free-exercise-db */
export const EXERCISE_IMAGE_MAP = {
  /* Peitoral */
  "Supino reto com barra": "Barbell_Bench_Press_-_Medium_Grip",
  "Supino reto com halteres": "Dumbbell_Bench_Press",
  "Supino inclinado com barra": "Barbell_Incline_Bench_Press_-_Medium_Grip",
  "Supino inclinado com halteres": "Incline_Dumbbell_Press",
  "Supino declinado com barra": "Decline_Barbell_Bench_Press",
  "Supino declinado com halteres": "Decline_Dumbbell_Bench_Press",
  "Supino declinado": "Decline_Barbell_Bench_Press",
  "Supino inclinado Smith": "Smith_Machine_Incline_Bench_Press",
  "Supino horizontal": "Machine_Bench_Press",
  "Chest Press": "Machine_Bench_Press",
  "Supino fechado": "Close-Grip_Barbell_Bench_Press",
  "Pullover com halter": "Bent-Arm_Dumbbell_Pullover",
  "Crossover alto": "Cable_Crossover",
  "Crossover médio": "Cable_Crossover",
  "Crossover baixo": "Cable_Crossover",
  "Crossover unilateral": "Cable_Crossover",
  "Crucifixo no cabo": "Cable_Crossover",
  "Crucifixo inclinado com halteres": "Incline_Dumbbell_Flyes",
  "Crucifixo": "Dumbbell_Flyes",
  "Voador": "Butterfly",
  "Peck deck": "Butterfly",
  "Flexão tradicional": "Pushups",
  "Paralelas com inclinação do tronco": "Dips_-_Chest_Version",

  /* Costas */
  "Barra fixa pronada": "Pullups",
  "Barra fixa": "Pullups",
  "Barra fixa supinada": "Chin-Up",
  "Chin-up": "Chin-Up",
  "Puxada frontal": "Wide-Grip_Lat_Pulldown",
  "Puxada aberta": "Wide-Grip_Lat_Pulldown",
  "Puxada fechada": "Close-Grip_Front_Lat_Pulldown",
  "Puxada supinada": "Underhand_Cable_Pulldowns",
  "Pulldown com braço reto": "Straight-Arm_Pulldown",
  "Remada baixa": "Seated_Cable_Rows",
  "Remada curvada com barra": "Bent_Over_Barbell_Row",
  "Remada curvada supinada": "Reverse_Grip_Bent-Over_Rows",
  "Remada unilateral com halter": "One-Arm_Dumbbell_Row",
  "Remada serrote": "One-Arm_Dumbbell_Row",
  "Remada cavalinho": "T-Bar_Row_with_Handle",
  "Remada alta": "Upright_Barbell_Row",
  "Levantamento terra": "Barbell_Deadlift",
  "Levantamento terra romeno": "Romanian_Deadlift",
  "Terra romeno": "Romanian_Deadlift",
  "Levantamento terra sumô": "Sumo_Deadlift",
  "Hiperextensão": "Hyperextensions_Back_Extensions",
  "Back Extension": "Hyperextensions_Back_Extensions",
  "Superman": "Superman",

  /* Trapézio / ombros */
  "Encolhimento com barra": "Barbell_Shrug",
  "Encolhimento com halteres": "Dumbbell_Shrug",
  "Encolhimento no Smith": "Smith_Machine_Shrug",
  "Face Pull": "Face_Pull",
  "Farmer's Walk": "Farmers_Walk",
  "Desenvolvimento militar com barra": "Standing_Military_Press",
  "Desenvolvimento com halteres": "Dumbbell_Shoulder_Press",
  "Desenvolvimento Arnold": "Arnold_Dumbbell_Press",
  "Desenvolvimento na máquina": "Machine_Shoulder_Military_Press",
  "Elevação lateral com halteres": "Side_Lateral_Raise",
  "Elevação frontal com halteres": "Front_Dumbbell_Raise",
  "Crucifixo inverso com halteres": "Reverse_Flyes",
  "Crucifixo inverso na máquina": "Reverse_Machine_Flyes",
  "Reverse Pec Deck": "Reverse_Machine_Flyes",

  /* Bíceps / tríceps */
  "Rosca direta com barra": "Barbell_Curl",
  "Rosca direta com barra W": "EZ-Bar_Curl",
  "Rosca direta com halteres": "Dumbbell_Bicep_Curl",
  "Rosca alternada": "Dumbbell_Alternate_Bicep_Curl",
  "Rosca martelo": "Hammer_Curls",
  "Rosca concentrada": "Concentration_Curls",
  "Rosca Scott": "Preacher_Curl",
  "Rosca Scott com barra": "Preacher_Curl",
  "Rosca Scott com halteres": "One_Arm_Dumbbell_Preacher_Curl",
  "Rosca inclinada": "Incline_Dumbbell_Curl",
  "Rosca direta no cabo": "Standing_Biceps_Cable_Curl",
  "Rosca reversa": "Reverse_Barbell_Curl",
  "Rosca Zottman": "Zottman_Curl",
  "Rosca spider": "Spider_Curl",
  "Tríceps testa com barra": "EZ-Bar_Skullcrusher",
  "Tríceps pulley": "Triceps_Pushdown",
  "Tríceps barra": "Triceps_Pushdown",
  "Tríceps corda": "Triceps_Pushdown_-_Rope_Attachment",
  "Tríceps francês": "Standing_Dumbbell_Triceps_Extension",
  "Tríceps coice": "Tricep_Dumbbell_Kickback",
  "Paralelas": "Dips_-_Triceps_Version",
  "Dips": "Dips_-_Triceps_Version",

  /* Pernas / glúteos */
  "Agachamento livre": "Barbell_Squat",
  "Agachamento frontal": "Front_Barbell_Squat",
  "Agachamento goblet": "Goblet_Squat",
  "Goblet Squat": "Goblet_Squat",
  "Agachamento Smith": "Smith_Machine_Squat",
  "Hack Squat": "Hack_Squat",
  "Leg Press 45°": "Leg_Press",
  "Leg Press horizontal": "Leg_Press",
  "Cadeira extensora": "Leg_Extensions",
  "Mesa flexora": "Lying_Leg_Curls",
  "Cadeira flexora": "Seated_Leg_Curl",
  "Afundo com barra": "Barbell_Lunge",
  "Afundo com halteres": "Dumbbell_Lunges",
  "Afundo caminhando": "Bodyweight_Walking_Lunge",
  "Step-up": "Dumbbell_Step_Ups",
  "Step-up com halteres": "Dumbbell_Step_Ups",
  "Stiff com barra": "Stiff-Legged_Barbell_Deadlift",
  "Stiff": "Stiff-Legged_Barbell_Deadlift",
  "Good Morning": "Good_Morning",
  "Hip Thrust com barra": "Barbell_Hip_Thrust",
  "Glute Bridge com barra": "Barbell_Glute_Bridge",
  "Abdução na máquina": "Thigh_Abductor",
  "Abdução de quadril": "Thigh_Abductor",
  "Adução na máquina": "Thigh_Adductor",
  "Elevação de panturrilha em pé com barra": "Standing_Calf_Raises",
  "Panturrilha em pé": "Standing_Calf_Raises",
  "Panturrilha sentada": "Seated_Calf_Raise",
  "Panturrilha no Leg Press": "Calf_Press_On_The_Leg_Press_Machine",
  "Panturrilha no Smith": "Smith_Machine_Calf_Raise",
  "Panturrilha donkey": "Donkey_Calf_Raises",

  /* Abdômen / core */
  "Abdominal tradicional": "Crunches",
  "Crunch": "Crunches",
  "Crunch reverso": "Reverse_Crunch",
  "Abdominal bicicleta": "Air_Bike",
  "Sit-up": "Sit-Up",
  "Elevação de pernas": "Hanging_Leg_Raise",
  "Crunch no cabo": "Cable_Crunch",
  "Prancha": "Plank",
  "Prancha lateral": "Side_Bridge",
  "Mountain Climber": "Mountain_Climbers",
  "Dead Bug": "Dead_Bug",
  "Pallof Press": "Pallof_Press",

  /* Kettlebell */
  "Kettlebell Swing": "One-Arm_Kettlebell_Swings"
};

const norm = (s) =>
  String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

/* Índice por nome normalizado (sem acento/caixa): "supino  RETO com barra" também acha. */
const INDEX = new Map(Object.entries(EXERCISE_IMAGE_MAP).map(([name, id]) => [norm(name), id]));

export function exerciseImageId(name) {
  return INDEX.get(norm(name)) || null;
}

/* ids cujas imagens não carregaram em nenhuma fonte: vão direto ao ícone nos próximos renders. */
const FAILED = new Set();
export const markImageFailed = (id) => FAILED.add(id);
export const imageFailed = (id) => FAILED.has(id);
export const resetFailedImages = () => FAILED.clear();

/* frame: 0 = início, 1 = fim; source: índice em EXERCISE_IMAGE_SOURCES */
export function exerciseImageUrl(id, frame = 0, source = 0) {
  const base = EXERCISE_IMAGE_SOURCES[source];
  return base ? `${base}${encodeURIComponent(id)}/${frame}.jpg` : null;
}
