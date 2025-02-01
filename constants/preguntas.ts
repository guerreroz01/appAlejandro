export type Respuestas = {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
};

export type Pregunta = {
  pregunta: string;
  respuestas: Respuestas;
};

export const data: Pregunta[] = [
  {
    pregunta: "¿Qué tipo de ambiente laboral te gustaría tener en el futuro?",
    respuestas: {
      "1": "Trabajar de manera independiente",
      "2": "Trabajar en equipo",
      "3": "Trabajar en un ambiente estructurado",
      "4": "Trabajar en un ambiente creativo",
    },
  },
  {
    pregunta: "¿Qué tipo de actividades disfrutas haciendo en tu tiempo libre?",
    respuestas: {
      "1": "Actividades al aire libre",
      "2": "Actividades artísticas",
      "3": "Actividades deportivas",
      "4": "Actividades de lectura o estudio",
    },
  },
  {
    pregunta: "¿Te consideras una persona más analítica o creativa?",
    respuestas: {
      "1": "Analítica",
      "2": "Creativa",
      "3": "Ambas",
      "4": "Ninguna de las anteriores",
    },
  },
  {
    pregunta: "¿Prefieres trabajar en un ambiente de oficina o al aire libre?",
    respuestas: {
      "1": "Oficina",
      "2": "Aire libre",
      "3": "Depende de la ocasión",
      "4": "No tengo preferencia",
    },
  },
  {
    pregunta: "¿Qué tipo de tareas prefieres realizar en tu día a día?",
    respuestas: {
      "1": "Tareas manuales",
      "2": "Tareas intelectuales",
      "3": "Tareas que requieran interacción social",
      "4": "Tareas que impliquen resolver problemas",
    },
  },
  {
    pregunta:
      "¿Qué tipo de trabajo te gustaría desempeñar en el ámbito sanitario en el futuro?",
    respuestas: {
      "1": "Médico",
      "2": "Enfermero",
      "3": "Farmacéutico",
      "4": "Nutricionista",
    },
  },
  {
    pregunta:
      "¿Cuál de las siguientes carreras te llama más la atención en este momento?",
    respuestas: {
      "1": "Ingeniería en Sistemas Computacionales",
      "2": "Arquitectura",
      "3": "Derecho",
      "4": "Física",
    },
  },
  {
    pregunta:
      "¿Estás considerando estudiar una carrera relacionada con la Educación?",
    respuestas: {
      "1": "Sí, Educación Primaria",
      "2": "Sí, Educación Secundaria",
      "3": "No, no me interesa la Educación como carrera",
      "4": "No lo tengo decidido aún",
    },
  },
  {
    pregunta: "¿Qué tipo de rutina de estudio prefieres?",
    respuestas: {
      "1": "Estudiar en cortos períodos intensivos",
      "2": "Distribuir el estudio a lo largo del día",
      "3": "Estudiar principalmente en las noches",
      "4": "Hacer grupos de estudio con compañeros",
    },
  },
  {
    pregunta:
      "¿Qué hábitos de vida consideras más importantes para tu rendimiento académico?",
    respuestas: {
      "1": "Hacer ejercicio regularmente y llevar una alimentación balanceada",
      "2": "Dormir las horas necesarias y mantener una alimentación saludable",
      "3": "Realizar actividades recreativas para despejar la mente",
      "4": "Establecer horarios fijos de estudio y descanso",
    },
  },
  {
    pregunta: "Futura vida laboral después de terminar la carrera",
    respuestas: {
      "1": "¿Te visualizas trabajando en un bufete de abogados importante?",
      "2": "¿Te ves realizando cirugías en un hospital reconocido?",
      "3": "¿Te imaginas diseñando grandes estructuras como puentes o edificios?",
      "4": "¿Te proyectas desarrollando software innovador?",
    },
  },
  {
    pregunta: "Carrera que el adolescente quiere cursar",
    respuestas: {
      "1": "¿Te apasiona el estudio del comportamiento humano y la mente?",
      "2": "¿Te gustaría aprender sobre leyes y defender a personas en situaciones legales?",
      "3": "¿Te atrae la idea de trabajar con números y realizar análisis financieros?",
      "4": "¿Te interesa la salud y el cuidado de las personas?",
    },
  },
  {
    pregunta: "Adolescentes cursando segundo de bachillerato",
    respuestas: {
      "1": "¿Ya tienes claro qué estudios universitarios quieres cursar?",
      "2": "¿Ha pensado en qué campo te gustaría especializarte?",
      "3": "¿Te sientes preparado para dar el siguiente paso en tu educación?",
      "4": "¿Has investigado sobre las diferentes opciones de carreras universitarias?",
    },
  },
  {
    pregunta: "Adolescentes interesados en ejercer como futuros sanitarios",
    respuestas: {
      "1": "¿Te gustaría trabajar en hospitales o clínicas atendiendo a pacientes?",
      "2": "¿Sientes empatía y compasión por las personas que necesitan ayuda médica?",
      "3": "¿Te interesa estudiar el funcionamiento del cuerpo humano y cómo mantener la salud?",
      "4": "¿Te atrae la idea de contribuir al bienestar de la sociedad a través de la medicina?",
    },
  },
  {
    pregunta:
      "Elección de carrera universitaria basada en intereses y aptitudes",
    respuestas: {
      "1": "¿Te identificas más con la resolución de problemas legales y debates?",
      "2": "¿Disfrutas de la tecnología y la programación para crear herramientas digitales?",
      "3": "¿Te atrae la idea de investigar y descubrir nuevos conocimientos en el área de la salud?",
      "4": "¿Te visualizas proyectando y construyendo estructuras arquitectónicas innovadoras?",
    },
  },
  {
    pregunta: "Hábitos de estudio, deporte, alimentación y sueño",
    respuestas: {
      "1": "¿Dedicas tiempo diario a estudiar y repasar tus lecciones?",
      "2": "¿Practicas algún deporte o actividad física de manera regular?",
      "3": "¿Mantienes una alimentación balanceada y saludable?",
      "4": "¿Descansas lo suficiente y duermes las horas recomendadas para tu edad?",
    },
  },
  {
    pregunta: "¿Qué tipo de ambiente laboral prefieres?",
    respuestas: {
      "1": "Trabajar en un ambiente tranquilo y organizado",
      "2": "Trabajar en un ambiente dinámico y competitivo",
      "3": "Trabajar en un ambiente creativo y colaborativo",
      "4": "Trabajar en un ambiente de constante aprendizaje",
    },
  },
  {
    pregunta:
      "¿Qué tan importante es para ti tener un horario flexible en tu trabajo?",
    respuestas: {
      "1": "No es importante, prefiero un horario fijo",
      "2": "Es muy importante para poder conciliar mi vida personal y laboral",
      "3": "Me da igual, puedo adaptarme a cualquier horario",
      "4": "Prefiero un horario mixto, con flexibilidad pero también con cierta estructura",
    },
  },
  {
    pregunta: "¿Qué habilidad consideras que es tu punto fuerte?",
    respuestas: {
      "1": "Habilidad para la resolución de problemas",
      "2": "Habilidad para la comunicación",
      "3": "Habilidad artística o creativa",
      "4": "Habilidad para el análisis y la lógica",
    },
  },
  {
    pregunta: "¿En qué tipo de proyectos te gustaría trabajar?",
    respuestas: {
      "1": "Proyectos sociales o de ayuda humanitaria",
      "2": "Proyectos tecnológicos o de innovación",
      "3": "Proyectos artísticos o culturales",
      "4": "Proyectos de investigación y desarrollo",
    },
  },
  {
    pregunta: "¿Qué tipo de actividades prefieres hacer en tu tiempo libre?",
    respuestas: {
      "1": "Actividades al aire libre y deportes",
      "2": "Tocar algún instrumento musical o practicar arte",
      "3": "Leer, investigar o aprender sobre diversos temas",
      "4": "Socializar y participar en eventos sociales",
    },
  },
  {
    pregunta: "¿Qué tipo de satisfacción buscas en tu trabajo futuro?",
    respuestas: {
      "1": "Satisfacción personal por ayudar a los demás",
      "2": "Satisfacción por lograr resultados tangibles y medibles",
      "3": "Satisfacción por expresar tu creatividad y originalidad",
      "4": "Satisfacción por contribuir al avance del conocimiento en tu área",
    },
  },
  {
    pregunta: "¿Qué tipo de desafíos te motivan más?",
    respuestas: {
      "1": "Desafíos que impliquen trabajar en equipo",
      "2": "Desafíos que requieran una solución innovadora",
      "3": "Desafíos que pongan a prueba tu capacidad analítica",
      "4": "Desafíos que te permitan impactar positivamente en la sociedad",
    },
  },
  {
    pregunta:
      "¿Cómo te visualizas en un ambiente laboral: líder, colaborador, investigador o creativo?",
    respuestas: {
      "1": "Líder, tomando decisiones y dirigiendo equipos",
      "2": "Colaborador, trabajando en equipo hacia un objetivo común",
      "3": "Investigador, buscando constantemente nuevas soluciones y conocimientos",
      "4": "Creativo, aportando ideas innovadoras y originales",
    },
  },
  {
    pregunta:
      "¿Qué enfoque prefieres para tu trabajo futuro: social, tecnológico, artístico o científico?",
    respuestas: {
      "1": "Social, orientado al bienestar de las personas y la comunidad",
      "2": "Tecnológico, enfocado en la innovación y la tecnología",
      "3": "Artístico, centrado en la expresión creativa y estética",
      "4": "Científico, basado en la investigación y el descubrimiento de nuevos conocimientos",
    },
  },
  {
    pregunta:
      "¿Cómo prefieres enfrentarte a los problemas: de manera lógica, emocional, creativa o estratégica?",
    respuestas: {
      "1": "De manera lógica, analizando los datos y buscando soluciones racionales",
      "2": "De manera emocional, considerando los sentimientos y emociones de las personas involucradas",
      "3": "De manera creativa, buscando soluciones originales e innovadoras",
      "4": "De manera estratégica, planificando y anticipando posibles escenarios",
    },
  },
  {
    pregunta:
      "¿Qué tipo de responsabilidades te gustaría asumir en tu carrera profesional: cuidar de otros, liderar proyectos, crear productos o investigar?",
    respuestas: {
      "1": "Cuidar de otros, velar por el bienestar y la salud de las personas",
      "2": "Liderar proyectos, coordinar equipos y lograr objetivos",
      "3": "Crear productos, servicios o soluciones innovadoras",
      "4": "Investigar, descubrir nuevos conocimientos y avances en tu campo",
    },
  },
  {
    pregunta:
      "¿Qué tipo de balance buscas entre tu vida laboral y personal: equilibrado, enfocado en el trabajo, enriquecedor personalmente o desafiante?",
    respuestas: {
      "1": "Equilibrado, con tiempo para trabajar, descansar y disfrutar",
      "2": "Enfocado en el trabajo, priorizando el crecimiento profesional",
      "3": "Enriquecedor personalmente, con experiencias que te hagan crecer como persona",
      "4": "Desafiante, con retos constantes que te motivan a superarte",
    },
  },
  {
    pregunta:
      "¿Qué importancia le das al salario en tu elección de carrera: muy importante, importante, secundario o poco relevante?",
    respuestas: {
      "1": "Muy importante, necesito un salario que me permita vivir cómodamente",
      "2": "Importante, aunque busco algo que me apasione también",
      "3": "Secundario, valoro más otros aspectos como la realización personal",
      "4": "Poco relevante, lo primordial es disfrutar lo que hago",
    },
  },
  {
    pregunta:
      "¿Qué tipo de formación te interesa más: práctica, teórica, experimental o interdisciplinaria?",
    respuestas: {
      "1": "Práctica, aprendiendo a través de la experiencia y la práctica directa",
      "2": "Teórica, basada en conceptos y fundamentos sólidos",
      "3": "Experimental, explorando nuevas ideas y enfoques mediante pruebas y ensayos",
      "4": "Interdisciplinaria, integrando conocimientos de diferentes áreas para enriquecer la perspectiva",
    },
  },
  {
    pregunta:
      "¿Qué tipo de relación buscas con tus colegas de trabajo: colaborativa, competitiva, comunitaria o profesional?",
    respuestas: {
      "1": "Colaborativa, trabajando en equipo y apoyándose mutuamente",
      "2": "Competitiva, buscando superar desafíos y destacar individualmente",
      "3": "Comunitaria, creando un ambiente de compañerismo y apoyo emocional",
      "4": "Profesional, manteniendo un trato formal y respetuoso en el ambiente laboral",
    },
  },
  {
    pregunta:
      "¿Qué tipo de tecnologías te gustaría utilizar en tu trabajo: automatización, inteligencia artificial, realidad virtual o análisis de big data?",
    respuestas: {
      "1": "Automatización, para optimizar procesos y tareas repetitivas",
      "2": "Inteligencia artificial, para desarrollar soluciones avanzadas y personalizadas",
      "3": "Realidad virtual, para crear experiencias inmersivas e innovadoras",
      "4": "Análisis de big data, para tomar decisiones basadas en datos y tendencias",
    },
  },
  {
    pregunta:
      "¿Qué tipo de impacto te gustaría tener en la sociedad a través de tu trabajo: mejorar la calidad de vida, impulsar la innovación, promover la cultura o generar conocimiento?",
    respuestas: {
      "1": "Mejorar la calidad de vida de las personas a través de soluciones prácticas",
      "2": "Impulsar la innovación y el desarrollo tecnológico en diversos sectores",
      "3": "Promover la cultura y las artes, enriqueciendo el patrimonio cultural",
      "4": "Generar conocimiento y contribuir al avance de la ciencia y la tecnología",
    },
  },
  {
    pregunta:
      "¿Qué tipo de entorno te resulta más inspirador para trabajar: naturaleza, ciudad, laboratorio o estudio creativo?",
    respuestas: {
      "1": "Naturaleza, disfrutando de espacios al aire libre y tranquilos",
      "2": "Ciudad, con acceso a diversidad de estímulos y oportunidades",
      "3": "Laboratorio, experimentando y descubriendo nuevos fenómenos",
      "4": "Estudio creativo, rodeado de arte, diseño y estímulos visuales",
    },
  },
  {
    pregunta:
      "¿Qué tipo de retos te gustaría superar en tu carrera: sociales, tecnológicos, creativos o científicos?",
    respuestas: {
      "1": "Retos sociales, enfrentando problemas de la sociedad actual",
      "2": "Retos tecnológicos, desarrollando soluciones innovadoras y disruptivas",
      "3": "Retos creativos, generando ideas novedosas y originales",
      "4": "Retos científicos, descubriendo nuevos conocimientos y avances en tu campo",
    },
  },
  {
    pregunta:
      "¿Qué tipo de contribución te gustaría hacer a través de tu trabajo: impacto social, avance tecnológico, expresión artística o descubrimiento científico?",
    respuestas: {
      "1": "Impacto social, mejorando la calidad de vida de las personas y la comunidad",
      "2": "Avance tecnológico, desarrollando soluciones innovadoras y disruptivas",
      "3": "Expresión artística, aportando belleza y creatividad al mundo",
      "4": "Descubrimiento científico, ampliando el conocimiento y los límites de la ciencia",
    },
  },
  {
    pregunta:
      "¿Cómo te imaginas tu futura vida laboral después de terminar la carrera?",
    respuestas: {
      "1": "Trabajar en una empresa importante",
      "2": "Montar mi propio negocio",
      "3": "Dedicarme a la investigación",
      "4": "Viajar y trabajar en diferentes países",
    },
  },
  {
    pregunta: "¿Qué carrera te gustaría cursar en la universidad?",
    respuestas: {
      "1": "Medicina",
      "2": "Ingeniería",
      "3": "Ciencias Sociales",
      "4": "Arte y Diseño",
    },
  },
  {
    pregunta: "¿Cuál de las siguientes opciones describe mejor tus intereses?",
    respuestas: {
      "1": "Cuidar y ayudar a las personas",
      "2": "Crear y construir cosas",
      "3": "Trabajar en equipo y resolver problemas sociales",
      "4": "Expresar mi creatividad a través del arte",
    },
  },
  {
    pregunta: "¿Estás considerando alguna carrera relacionada con la salud?",
    respuestas: {
      "1": "Sí",
      "2": "No",
      "3": "Tal vez",
      "4": "No lo sé",
    },
  },
  {
    pregunta:
      "¿Qué tipo de hábitos de estudio y vida consideras importantes para tener éxito en la universidad?",
    respuestas: {
      "1": "Dedicar tiempo diario al estudio y dormir adecuadamente",
      "2": "Hacer ejercicio regularmente y mantener una dieta balanceada",
      "3": "Organizarme con planificadores y establecer metas claras",
      "4": "Buscar apoyo de profesores y compañeros cuando sea necesario",
    },
  },
  {
    pregunta: "¿Qué tipo de ambiente laboral te gustaría tener en el futuro?",
    respuestas: {
      "1": "Trabajar en un ambiente tranquilo y organizado",
      "2": "Trabajar en un ambiente dinámico y creativo",
      "3": "Trabajar en un ambiente colaborativo y en equipo",
      "4": "Trabajar en un ambiente desafiante y competitivo",
    },
  },
  {
    pregunta:
      "¿Qué tipo de actividades te llaman más la atención para realizar en tu futuro trabajo?",
    respuestas: {
      "1": "Resolver problemas y retos de manera creativa",
      "2": "Interactuar con personas y ayudar en su bienestar",
      "3": "Analizar datos y realizar investigaciones",
      "4": "Diseñar proyectos o estructuras",
    },
  },
  {
    pregunta: "¿Prefieres trabajar de forma independiente o en equipo?",
    respuestas: {
      "1": "Trabajar de forma independiente",
      "2": "Trabajar en equipo",
      "3": "Me adapto a cualquier situación",
      "4": "Depende del proyecto o tarea",
    },
  },
  {
    pregunta:
      "¿Qué tipo de habilidades crees que posees y te gustaría desarrollar en tu profesión futura?",
    respuestas: {
      "1": "Habilidades analíticas y de resolución de problemas",
      "2": "Habilidades de comunicación y empatía",
      "3": "Habilidades técnicas y especializadas",
      "4": "Habilidades creativas y artísticas",
    },
  },
  {
    pregunta:
      "¿Qué materias o asignaturas te resultan más interesantes y motivadoras en la escuela?",
    respuestas: {
      "1": "Matemáticas y Ciencias",
      "2": "Lengua y Literatura",
      "3": "Tecnología e Informática",
      "4": "Arte y Música",
    },
  },
  {
    pregunta:
      "¿Qué tipo de impacto te gustaría tener en la sociedad con tu futura carrera?",
    respuestas: {
      "1": "Contribuir al avance científico y tecnológico",
      "2": "Mejorar la calidad de vida de las personas",
      "3": "Innovar en soluciones sostenibles",
      "4": "Inspirar a través del arte y la cultura",
    },
  },
  {
    pregunta:
      "¿Qué tipo de rutina de trabajo crees que se adaptaría mejor a tu estilo de vida?",
    respuestas: {
      "1": "Rutina flexible y variable",
      "2": "Rutina estable y organizada",
      "3": "Rutina dinámica y en constante cambio",
      "4": "Rutina creativa y no convencional",
    },
  },
  {
    pregunta:
      "¿Qué tipo de desafíos estás dispuesto a enfrentar en tu futura carrera?",
    respuestas: {
      "1": "Resolver problemas complejos",
      "2": "Gestionar situaciones emocionales delicadas",
      "3": "Innovar y adaptarse a cambios constantes",
      "4": "Crear proyectos disruptivos y originales",
    },
  },
  {
    pregunta:
      "¿Qué tipo de ambiente de aprendizaje prefieres para tu desarrollo profesional?",
    respuestas: {
      "1": "Ambiente académico y teórico",
      "2": "Ambiente práctico y experimental",
      "3": "Ambiente interactivo y colaborativo",
      "4": "Ambiente creativo y artístico",
    },
  },
  {
    pregunta:
      "¿Qué tipo de tecnologías te gustaría utilizar en tu futura profesión?",
    respuestas: {
      "1": "Software especializado y herramientas analíticas",
      "2": "Dispositivos médicos y tecnología sanitaria",
      "3": "Innovaciones en energías renovables y sostenibilidad",
      "4": "Programas de diseño y multimedia",
    },
  },
  {
    pregunta:
      "¿Qué tipo de investigación o desarrollo te gustaría realizar en tu futura carrera?",
    respuestas: {
      "1": "Investigación científica y descubrimientos innovadores",
      "2": "Desarrollo de terapias y cuidado de la salud",
      "3": "Investigación en tecnologías limpias y ambientales",
      "4": "Investigación en arte y cultura",
    },
  },
  {
    pregunta:
      "¿Qué tipo de formación complementaria te gustaría adquirir durante tu carrera universitaria?",
    respuestas: {
      "1": "Cursos de especialización técnica",
      "2": "Formación en habilidades de comunicación y liderazgo",
      "3": "Programas de intercambio internacional",
      "4": "Talleres de creatividad y diseño",
    },
  },
  {
    pregunta:
      "¿Qué tipo de habilidades consideras esenciales para triunfar en tu futura profesión?",
    respuestas: {
      "1": "Capacidad de análisis y solución de problemas",
      "2": "Empatía y habilidades interpersonales",
      "3": "Dominio técnico y especialización",
      "4": "Creatividad e innovación",
    },
  },
  {
    pregunta:
      "¿Qué tipo de entorno laboral te gustaría explorar a nivel internacional en tu carrera?",
    respuestas: {
      "1": "Empresas globales y proyectos internacionales",
      "2": "Organizaciones humanitarias y cooperación internacional",
      "3": "Investigación en centros científicos internacionales",
      "4": "Eventos y actividades culturales a nivel mundial",
    },
  },
  {
    pregunta:
      "¿Qué tipo de proyectos te gustaría liderar en tu futura profesión?",
    respuestas: {
      "1": "Proyectos de investigación científica",
      "2": "Proyectos de ayuda social y sanitaria",
      "3": "Proyectos de desarrollo sostenible y ambiental",
      "4": "Proyectos artísticos y culturales",
    },
  },
  {
    pregunta:
      "¿Qué tipo de métodos de resolución de conflictos te sentirías más cómodo utilizando en tu futura profesión?",
    respuestas: {
      "1": "Métodos analíticos y racionales",
      "2": "Métodos empáticos y de escucha activa",
      "3": "Métodos de innovación y creatividad",
      "4": "Métodos de negociación y conciliación",
    },
  },
  {
    pregunta:
      "¿Qué tipo de pacientes o clientes te gustaría atender en tu futura carrera sanitaria?",
    respuestas: {
      "1": "Pacientes con enfermedades complejas y poco comunes",
      "2": "Pacientes de diferentes culturas y contextos sociales",
      "3": "Pacientes interesados en terapias alternativas y naturales",
      "4": "Pacientes que buscan soluciones innovadoras y tecnológicas",
    },
  },
  {
    pregunta:
      "¿Qué tipo de enfoque de tratamiento te gustaría seguir en tu futura profesión sanitaria?",
    respuestas: {
      "1": "Enfoque tradicional y basado en evidencia científica",
      "2": "Enfoque holístico e integrativo",
      "3": "Enfoque preventivo y de promoción de la salud",
      "4": "Enfoque tecnológico y de vanguardia",
    },
  },
  {
    pregunta:
      "¿Qué tipo de habilidades manuales o técnicas te gustaría desarrollar en tu futura profesión?",
    respuestas: {
      "1": "Habilidades quirúrgicas y de precisión",
      "2": "Habilidades de comunicación y empatía",
      "3": "Habilidades en tecnologías médicas y equipamiento",
      "4": "Habilidades en terapias manuales y alternativas",
    },
  },
  {
    pregunta:
      "¿Qué tipo de especialización o área de enfoque te interesa más en el campo de la salud?",
    respuestas: {
      "1": "Investigación en nuevas enfermedades y tratamientos",
      "2": "Atención primaria y medicina familiar",
      "3": "Salud pública y prevención de epidemias",
      "4": "Tecnología médica y sistemas de información sanitaria",
    },
  },
  {
    pregunta: "¿Te ves trabajando en un hospital o centro de salud?",
    respuestas: {
      "1": "Sí, me encantaría trabajar en el área de la salud",
      "2": "Prefiero explorar otras opciones laborales",
      "3": "No lo he considerado aún",
      "4": "No, definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te sientes atraído por la idea de resolver problemas judiciales y defender a personas en situaciones legales?",
    respuestas: {
      "1": "Sí, me gustaría ser abogado",
      "2": "No me llama mucho la atención el Derecho",
      "3": "Todavía no he pensado en ello",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te gustaría trabajar en la creación de objetos arquitectónicos y urbanos que mejoren la vida de las personas?",
    respuestas: {
      "1": "Me encantaría ser arquitecto",
      "2": "No tengo mucho interés en la arquitectura",
      "3": "No lo he considerado como opción",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Imaginas tu futuro trabajando con números, realizando análisis financieros y auditorías?",
    respuestas: {
      "1": "Me gustaría ser contador público",
      "2": "No me considero bueno con los números",
      "3": "Aún no he pensado en esa posibilidad",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te atrae la idea de trabajar en el desarrollo de software y tecnología para solucionar problemas informáticos?",
    respuestas: {
      "1": "Sí, me gustaría ser ingeniero de software",
      "2": "No me siento cómodo con la programación",
      "3": "Todavía no he considerado esa opción",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te visualizas trabajando en la investigación científica para descubrir nuevos avances y tecnologías?",
    respuestas: {
      "1": "Sí, me gustaría ser físico o químico",
      "2": "No me llama la atención la investigación científica",
      "3": "No he considerado esa posibilidad",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te ves desempeñándote como docente en niveles primarios o secundarios?",
    respuestas: {
      "1": "Me gustaría ser profesor de educación primaria o secundaria",
      "2": "No creo tener vocación para la docencia",
      "3": "No he considerado la enseñanza como opción",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te atrae la idea de trabajar en la planificación y diseño de espacios y estructuras arquitectónicas?",
    respuestas: {
      "1": "Me gustaría ser arquitecto",
      "2": "No me interesa el diseño de espacios",
      "3": "No lo he considerado como opción laboral",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te visualizas trabajando en el cuidado de la salud dental de las personas?",
    respuestas: {
      "1": "Sí, me gustaría ser dentista",
      "2": "No me atrae el campo de la odontología",
      "3": "Aún no he pensado en ello",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Imaginas tu futuro profesional en la investigación y desarrollo de nuevos tratamientos médicos y farmacéuticos?",
    respuestas: {
      "1": "Sí, me gustaría ser farmacéutico o investigador en biotecnología",
      "2": "No me interesa el campo de la medicina o farmacia",
      "3": "No he considerado esa posibilidad",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te atrae la idea de trabajar en el ámbito de la comunicación y la creatividad para promocionar productos y servicios?",
    respuestas: {
      "1": "Me gustaría ser publicista o diseñador gráfico",
      "2": "No me siento creativo/a para esas áreas",
      "3": "No he considerado esas opciones laborales",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te ves desempeñando labores de gestión empresarial y análisis financiero en distintas organizaciones?",
    respuestas: {
      "1": "Me gustaría ser economista o asesor financiero",
      "2": "No me siento atraído/a por la gestión empresarial",
      "3": "Todavía no he considerado esas opciones",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te sientes atraído por el cuidado de los animales y la salud veterinaria?",
    respuestas: {
      "1": "Sí, me gustaría ser veterinario",
      "2": "No me siento cómodo/a trabajando con animales",
      "3": "No he considerado esa posibilidad",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te ves investigando y analizando el comportamiento social y cultural de las personas?",
    respuestas: {
      "1": "Me gustaría ser sociólogo o trabajador social",
      "2": "No me interesa la sociología o el trabajo social",
      "3": "Aún no he pensado en ello",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te visualizas trabajando en el diseño y la creación de productos tecnológicos innovadores?",
    respuestas: {
      "1": "Sí, me gustaría ser ingeniero en telecomunicaciones o en energías renovables",
      "2": "No me siento atraído/a por la tecnología y la innovación",
      "3": "No he considerado esa posibilidad",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te atrae la idea de trabajar en la atención y cuidado de pacientes en el ámbito de la salud?",
    respuestas: {
      "1": "Sí, me gustaría ser enfermero o fisioterapeuta",
      "2": "No me siento cómodo/a en ambientes de atención médica",
      "3": "Aún no he pensado en ello",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te ves investigando y trabajando en el desarrollo de nuevas tecnologías para la comunicación y la información?",
    respuestas: {
      "1": "Sí, me gustaría ser ingeniero en sistemas computacionales o arquitecto de software",
      "2": "No me interesa la tecnología de la información",
      "3": "No he considerado esa posibilidad",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te atrae la idea de trabajar en la protección del medio ambiente y el desarrollo sostenible de proyectos?",
    respuestas: {
      "1": "Me gustaría ser ingeniero ambiental o agrónomo",
      "2": "No me interesa la protección ambiental",
      "3": "Todavía no he considerado esas opciones",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te visualizas impartiendo clases y compartiendo conocimientos en el ámbito académico?",
    respuestas: {
      "1": "Me gustaría ser profesor de educación superior o universitaria",
      "2": "No me atrae la idea de la enseñanza",
      "3": "No lo he considerado como opción laboral",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta:
      "¿Te sientes atraído por la resolución de problemas y la creación de soluciones ingeniosas y prácticas?",
    respuestas: {
      "1": "Sí, me gustaría ser ingeniero civil o mecánico",
      "2": "No me considero una persona muy ingeniosa",
      "3": "Aún no he pensado en ello",
      "4": "Definitivamente no es lo mío",
    },
  },
  {
    pregunta: "¿Qué tipo de ambiente de trabajo prefieres?",
    respuestas: {
      "1": "Ambiente tranquilo y organizado",
      "2": "Ambiente dinámico y colaborativo",
      "3": "Ambiente creativo y flexible",
      "4": "Ambiente estructurado y de constante aprendizaje",
    },
  },
  {
    pregunta: "¿Qué tipo de actividades disfrutas realizar en tu tiempo libre?",
    respuestas: {
      "1": "Actividades al aire libre y deportivas",
      "2": "Actividades culturales y artísticas",
      "3": "Actividades de lectura e investigación",
      "4": "Actividades de voluntariado y ayuda social",
    },
  },
  {
    pregunta: "¿Qué tipo de retos te motiva a mejorar?",
    respuestas: {
      "1": "Retos que requieran habilidades técnicas y precisión",
      "2": "Retos que estimulen la creatividad y la innovación",
      "3": "Retos que impliquen resolver problemas de forma analítica",
      "4": "Retos que tengan un impacto positivo en la sociedad",
    },
  },
  {
    pregunta: "¿Qué materias te resultan más interesantes en el colegio?",
    respuestas: {
      "1": "Matemáticas y Física",
      "2": "Literatura y Arte",
      "3": "Biología y Química",
      "4": "Historia y Filosofía",
    },
  },
  {
    pregunta:
      "¿Qué tipo de formación complementaria te gustaría realizar en el futuro?",
    respuestas: {
      "1": "Cursos de idiomas y comunicación",
      "2": "Cursos de tecnología y programación",
      "3": "Cursos de psicología y desarrollo personal",
      "4": "Cursos de emprendimiento y negocios",
    },
  },
  {
    pregunta: "¿Cuál es tu postura ante los desafíos emocionales?",
    respuestas: {
      "1": "Me gusta ayudar a otros a superar sus problemas",
      "2": "Prefiero resolver problemas de forma lógica y racional",
      "3": "Me motiva comprender el comportamiento humano",
      "4": "Disfruto creando soluciones innovadoras",
    },
  },
  {
    pregunta:
      "¿Qué tipo de habilidades crees que son fundamentales para tu desarrollo personal?",
    respuestas: {
      "1": "Habilidades de comunicación y liderazgo",
      "2": "Habilidades de análisis y resolución de problemas",
      "3": "Habilidades creativas y artísticas",
      "4": "Habilidades técnicas y científicas",
    },
  },
  {
    pregunta:
      "¿Qué área te gustaría explorar para contribuir al bienestar de la sociedad?",
    respuestas: {
      "1": "Salud y cuidado de las personas",
      "2": "Tecnología y desarrollo de software",
      "3": "Medio ambiente y sostenibilidad",
      "4": "Educación y formación",
    },
  },
  {
    pregunta: "¿Qué tipo de proyectos te gustaría liderar en el futuro?",
    respuestas: {
      "1": "Proyectos de innovación tecnológica",
      "2": "Proyectos de impacto social",
      "3": "Proyectos de investigación científica",
      "4": "Proyectos educativos y de capacitación",
    },
  },
  {
    pregunta: "¿Qué te motiva a mejorar y crecer en tu vida profesional?",
    respuestas: {
      "1": "El deseo de ayudar a los demás",
      "2": "El interés por descubrir nuevas soluciones",
      "3": "La curiosidad por entender el mundo que nos rodea",
      "4": "La pasión por el aprendizaje continuo",
    },
  },
  {
    pregunta:
      "¿Qué tipo de entorno laboral te gustaría tener en tu futuro trabajo?",
    respuestas: {
      "1": "Trabajar en equipo de forma colaborativa",
      "2": "Crear soluciones innovadoras de forma independiente",
      "3": "Realizar investigaciones en un laboratorio",
      "4": "Interactuar con personas de diferentes culturas",
    },
  },
  {
    pregunta:
      "¿Qué tipo de desafíos te gustaría enfrentar en tu carrera profesional?",
    respuestas: {
      "1": "Desafíos que requieran capacidad de análisis y síntesis",
      "2": "Desafíos que impliquen pensar de manera creativa",
      "3": "Desafíos que demanden empatía y comprensión",
      "4": "Desafíos que promuevan la innovación y el progreso",
    },
  },
  {
    pregunta:
      "¿Qué tipo de conocimientos te gustaría adquirir en tu futura carrera?",
    respuestas: {
      "1": "Conocimientos técnicos y especializados",
      "2": "Conocimientos creativos y artísticos",
      "3": "Conocimientos científicos y analíticos",
      "4": "Conocimientos humanistas y sociales",
    },
  },
  {
    pregunta: "¿Qué tipo de actividades te hacen sentir realizado/a?",
    respuestas: {
      "1": "Ayudar a quienes lo necesitan",
      "2": "Resolver problemas de forma eficaz",
      "3": "Comprender el funcionamiento del mundo",
      "4": "Crear cosas nuevas y originales",
    },
  },
  {
    pregunta:
      "¿Qué tipo de impacto te gustaría tener en tu entorno con tu futura profesión?",
    respuestas: {
      "1": "Me gustaría mejorar la calidad de vida de las personas",
      "2": "Me gustaría impulsar el cambio y la innovación",
      "3": "Me gustaría contribuir al conocimiento científico",
      "4": "Me gustaría fomentar la educación y el desarrollo",
    },
  },
  {
    pregunta: "¿Qué tipo de avances tecnológicos te resultan más interesantes?",
    respuestas: {
      "1": "Avances en medicina y biotecnología",
      "2": "Avances en inteligencia artificial y robótica",
      "3": "Avances en energías renovables y sostenibilidad",
      "4": "Avances en comunicaciones y telecomunicaciones",
    },
  },
  {
    pregunta:
      "¿Qué tipo de habilidades crees que son esenciales en el mundo laboral actual?",
    respuestas: {
      "1": "Habilidades de adaptabilidad y resiliencia",
      "2": "Habilidades de pensamiento crítico y resolución de problemas",
      "3": "Habilidades de comunicación y trabajo en equipo",
      "4": "Habilidades de creatividad e innovación",
    },
  },
  {
    pregunta: "¿Qué tipo de investigaciones te resultan más atractivas?",
    respuestas: {
      "1": "Investigaciones que puedan mejorar la salud de las personas",
      "2": "Investigaciones que puedan revolucionar la tecnología",
      "3": "Investigaciones que puedan proteger el medio ambiente",
      "4": "Investigaciones que puedan aportar al crecimiento educativo",
    },
  },
  {
    pregunta:
      "¿Qué tipo de formación adicional te gustaría recibir luego de tu carrera universitaria?",
    respuestas: {
      "1": "Formación en habilidades directivas y gestión de proyectos",
      "2": "Formación en tecnologías emergentes y transformación digital",
      "3": "Formación en técnicas de investigación y análisis de datos",
      "4": "Formación en estrategias de comunicación y marketing",
    },
  },
  {
    pregunta:
      "¿Qué tipo de valores crees que son fundamentales en tu desarrollo profesional?",
    respuestas: {
      "1": "Valores éticos y de responsabilidad social",
      "2": "Valores de creatividad y originalidad",
      "3": "Valores de honestidad y transparencia",
      "4": "Valores de compromiso y perseverancia",
    },
  },
  {
    pregunta:
      "¿Cómo te imaginas tu vida laboral en el futuro luego de terminar la carrera universitaria?",
    respuestas: {
      "1": "Trabajando en una empresa multinacional",
      "2": "Emprendiendo mi propio negocio",
      "3": "Colaborando en organizaciones sin fines de lucro",
      "4": "Trabajando en el sector público",
    },
  },
  {
    pregunta: "¿Qué carrera universitaria te gustaría cursar y por qué?",
    respuestas: {
      "1": "Medicina, porque me interesa la salud y ayudar a los demás",
      "2": "Ingeniería, porque me apasiona la tecnología y la innovación",
      "3": "Derecho, porque me interesa la justicia y los derechos humanos",
      "4": "Arquitectura, porque me gusta el diseño y la creatividad",
    },
  },
  {
    pregunta: "¿Qué piensas estudiar una vez terminada la secundaria?",
    respuestas: {
      "1": "Medicina, para ayudar a los demás con su salud",
      "2": "Ingeniería, para trabajar en proyectos tecnológicos",
      "3": "Psicología, para comprender mejor a las personas",
      "4": "Arquitectura, para diseñar espacios innovadores",
    },
  },
  {
    pregunta:
      "¿Estás considerando alguna carrera universitaria en particular estando en segundo de bachillerato?",
    respuestas: {
      "1": "Sí, tengo una idea clara de lo que me gustaría estudiar",
      "2": "Todavía no tengo decidido qué carrera me gustaría estudiar",
      "3": "Estoy entre dos o tres opciones de carreras",
      "4": "No tengo interés en continuar con estudios universitarios",
    },
  },
  {
    pregunta: "¿Te gustaría ejercer como profesional de la salud en el futuro?",
    respuestas: {
      "1": "Sí, me gustaría trabajar en el ámbito de la salud",
      "2": "No, prefiero explorar otras áreas profesionales",
      "3": "Todavía no tengo claro en qué área me gustaría ejercer",
      "4": "No me interesa trabajar en el ámbito sanitario",
    },
  },
];
