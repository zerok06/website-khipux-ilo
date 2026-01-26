import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Session {
  time: string;
  title_es: string;
  title_en: string;
  description?: string;
  type: string;
  location: string;
  speaker_id?: string;
}

interface Day {
  date: string;
  day_name_es: string;
  day_name_en: string;
  sessions: Session[];
}

interface AgendaProps {
  days: Day[];
  locale: string;
}

const typeConfig: Record<string, { color: string; bgColor: string; label: string; labelEs: string }> = {
  talk: { color: 'text-amber-400', bgColor: 'bg-amber-500/10', label: 'Keynote', labelEs: 'Keynote' },
  panel: { color: 'text-purple-400', bgColor: 'bg-purple-500/10', label: 'Panel', labelEs: 'Panel' },
  workshop: { color: 'text-blue-400', bgColor: 'bg-blue-500/10', label: 'Workshop', labelEs: 'Taller' },
  networking: { color: 'text-green-400', bgColor: 'bg-green-500/10', label: 'Networking', labelEs: 'Networking' },
  logistics: { color: 'text-gray-400', bgColor: 'bg-gray-500/10', label: 'Logistics', labelEs: 'Logística' },
};

export default function Agenda({ days, locale }: AgendaProps) {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);
  const isEs = locale === 'es';

  const toggleSession = (index: number) => {
    setExpandedSession(expandedSession === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 text-primary-500 font-medium mb-4">
          <div className="w-8 h-0.5 bg-primary-500"></div>
          <span className="uppercase tracking-widest text-sm">
            {isEs ? 'Programa del Evento' : 'Event Program'}
          </span>
          <div className="w-8 h-0.5 bg-primary-500"></div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
          {isEs ? 'Agenda' : 'Schedule'}
        </h1>
      </div>

      {/* Day Selector - Horizontal Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-surface rounded-xl p-1 border border-border">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveDay(index);
                setExpandedSession(null);
              }}
              className={`relative px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 ${
                activeDay === index
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="block text-lg">{isEs ? `Día ${index + 1}` : `Day ${index + 1}`}</span>
              <span className="block text-xs opacity-70 mt-1">{day.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Day Title */}
      <motion.div
        key={activeDay}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary-400 font-heading">
          {isEs ? days[activeDay].day_name_es : days[activeDay].day_name_en}
        </h2>
      </motion.div>

      {/* Schedule Table */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Table Header */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-800">
              <div className="col-span-2">{isEs ? 'Hora' : 'Time'}</div>
              <div className="col-span-6">{isEs ? 'Sesión' : 'Session'}</div>
              <div className="col-span-2">{isEs ? 'Tipo' : 'Type'}</div>
              <div className="col-span-2">{isEs ? 'Lugar' : 'Location'}</div>
            </div>

            {/* Sessions */}
            {days[activeDay].sessions.map((session, idx) => {
              const config = typeConfig[session.type] || typeConfig.logistics;
              const isExpanded = expandedSession === idx;
              const hasDetails = session.description;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  {/* Row */}
                  <div
                    onClick={() => hasDetails && toggleSession(idx)}
                    className={`grid md:grid-cols-12 gap-4 px-6 py-5 border-b border-gray-800/50 transition-all duration-300 ${
                      hasDetails ? 'cursor-pointer hover:bg-surface' : ''
                    } ${isExpanded ? 'bg-surface' : ''}`}
                  >
                    {/* Time Column */}
                    <div className="md:col-span-2 flex items-center">
                      <span className="text-xl md:text-2xl font-bold text-primary-500 font-heading tabular-nums">
                        {session.time.split(' - ')[0]}
                      </span>
                    </div>

                    {/* Session Title Column */}
                    <div className="md:col-span-6 flex items-center">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                          {isEs ? session.title_es : session.title_en}
                        </h3>
                        {hasDetails && (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-500 mt-2">
                            <svg className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            {isEs ? 'Ver detalles' : 'View details'}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Type Column */}
                    <div className="md:col-span-2 flex items-center">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${config.color} ${config.bgColor}`}>
                        {isEs ? config.labelEs : config.label}
                      </span>
                    </div>

                    {/* Location Column */}
                    <div className="md:col-span-2 flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {session.location}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isExpanded && session.description && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-surface border-b border-gray-800/50"
                      >
                        <div className="px-6 py-6 md:pl-[calc(16.666%+1.5rem)]">
                          <p className="text-gray-300 leading-relaxed max-w-3xl">
                            {session.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(typeConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${config.bgColor} ${config.color}`}></div>
              <span className="text-sm text-gray-400">{isEs ? config.labelEs : config.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
