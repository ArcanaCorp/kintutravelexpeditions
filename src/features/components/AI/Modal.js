import { IconSend, IconX } from '@tabler/icons-react';
import { useAI } from '@/context/AIContext';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import './styles/AIModal.css';

export default function AIModal() {

    const { setViewModal, messages, entry, setEntry, handleSendMessage, isTyping } = useAI();

    return (
        <div className='--overlay-aimodal'>
            <div className='--aimodal w-full'>

                <div className='--aimodal-head bg-dark flex ph-4 pv-2 items-center justify-between'>
                    <h3 className='text-white'>Tu guía virtual</h3>
                    <button onClick={() => setViewModal(false)}>
                        <IconX className='text-white'/>
                    </button>
                </div>

                <div className='--aimodal-main bg-white scroll-y'>
                    <ul className='w-full flex flex-col gap-4 pv-2 ph-4'>
                        {messages.map((m, i) => (
                            <li
                                key={i}
                                className={`flex ${m.user === 'me' ? 'justify-end' : 'justify-start'}`}
                            >
                                <span className={`p-2 rounded-md text-sm ${
                                    m.user === 'me'
                                        ? '--burble-me bg-secondary'
                                        : '--burble-system bg-dark text-white'
                                }`}>
                                    {m.user === 'ai' ? (
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {m.value}
                                        </ReactMarkdown>
                                    ) : (
                                        m.value
                                    )}
                                </span>
                            </li>
                        ))}

                        {isTyping && (
                            <li className="text-xs text-gray">
                                La IA está escribiendo…
                            </li>
                        )}
                    </ul>
                </div>

                <div className='--aimodal-box bg-white flex items-center ph-4 gap-2'>
                    <input
                        className='--capture ph-2 rounded-sm'
                        value={entry}
                        placeholder='Ingresa tu consulta aquí'
                        onChange={(e) => setEntry(e.target.value)}
                    />
                    <button
                        className='--send-capture bg-dark rounded-sm center text-white'
                        onClick={handleSendMessage}
                        disabled={isTyping}
                    >
                        <IconSend/>
                    </button>
                </div>

            </div>
        </div>
    );
}