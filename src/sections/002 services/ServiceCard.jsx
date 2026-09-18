import { CircleCheck, MessagesSquare, Smile, Users } from "lucide-react";
import SabermasButton from "./SabermasButton";

const CONFIG = {
    kids: {
        id: 'service-card-kids',
        Icon: Smile,
        className: 'border-kids',
        color: 'bg-kids',
        message: 'Hola, me gustaría saber más sobre clases de inglés académico.',
        data: {
            title: 'Apoyo escolar para niños',
            subtitle: 'Ayuda a tu hijo a mejorar su inglés y a subir sus notas escolares.',
            bulletPoints: [
                {
                    id: 'kids-bullet-001',
                    content: 'Ayuda con las tareas'
                },
                {
                    id: 'kids-bullet-002',
                    content: 'Gramática y vocabulario'
                },
                {
                    id: 'kids-bullet-003',
                    content: 'Habilidades de lectura y escritura'
                },
                {
                    id: 'kids-bullet-004',
                    content: 'Preparación para exámenes'
                }
            ]
        }
    },
    conversational: {
        id: 'service-card-conversational',
        Icon: MessagesSquare,
        className: 'border-conversational',
        color: 'bg-conversational',
        message: 'Hola, me gustaría saber más sobre clases de inglés conversacional.',
        data: {
            title: 'Inglés conversacional',
            subtitle: 'Adquiere confianza y fluidez en conversaciones de la vida real.',
            bulletPoints: [
                {
                    id: 'conversational-bullet-001',
                    content: 'Comunicación cotidiana'
                },
                {
                    id: 'conversational-bullet-002',
                    content: 'Pronunciación y comprensión auditiva'
                },
                {
                    id: 'conversational-bullet-003',
                    content: 'Viajes y situaciones sociales'
                },
                {
                    id: 'conversational-bullet-004',
                    content: 'Desarrollo de la confianza'
                }
            ]
        }
    },
    professional: {
        id: 'service-card-professional',
        Icon: Users,
        className: 'border-professional',
        color: 'bg-professional',
        message: 'Hola, me gustaría saber más sobre clases de inglés profesional.',
        data: {
            title: 'Inglés profesional y técnico',
            subtitle: 'Comunícate con claridad y confianza en tu carrera.',
            bulletPoints: [
                {
                    id: 'professional-bullet-001',
                    content: 'Comunicación empresarial'
                },
                {
                    id: 'professional-bullet-002',
                    content: 'Vocabulario específico del sector'
                },
                {
                    id: 'professional-bullet-003',
                    content: 'Presentaciones y reuniones'
                },
                {
                    id: 'professional-bullet-004',
                    content: 'Preparación de CV y entrevistas'
                }
            ]
        }
    },
}


export default function ServiceCard ({ variant }) {
    const selected = CONFIG[variant]
    const { Icon, className, color, data, message } = selected
    return (
        <div className={`border rounded-xl xs:w-full md:size-96 text-primary ${className} p-6 flex flex-col text-left space-y-4`}>
            <div className={`${color} size-14 shrink-0 rounded-full centered xs:max-md:self-end`}>
                <Icon />
            </div>
            <div className="flex-col space-y-2 flex">
                <p className="text-lg font-bold">{data.title}</p>
                <p className="text-sm">{data.subtitle}</p>
            </div>
            <ul className="flex flex-col space-y-2">
                {data?.bulletPoints.map(b => {
                    return (
                        <li key={b.id} className={`flex items-center space-x-2 `}>
                            <CircleCheck className={`${color} rounded-full`} />
                            <span className="text-sm">{b.content}</span>
                        </li>
                    )
                })}
            </ul>
            <SabermasButton message={message} />
        </div>
    );
}