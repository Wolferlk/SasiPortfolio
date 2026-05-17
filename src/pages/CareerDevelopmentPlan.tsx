import { motion } from 'framer-motion';
import { Flag, Rocket, Building2, Gamepad2, CheckCircle2 } from 'lucide-react';

const goalSections = [
  {
    title: 'Short-Term Goals',
    period: '0-1 year',
    icon: <Rocket className="w-6 h-6" />,
    items: [
      'Secure a Software Engineering internship',
      'Improve skills in MERN stack, Spring Boot, and Machine Learning',
      'Build more real-world projects and strengthen problem-solving skills',
    ],
  },
  {
    title: 'Mid-Term Goals',
    period: '2-5 years',
    icon: <Building2 className="w-6 h-6" />,
    items: [
      'Work as a Software Engineer in a reputed company',
      'Gain industry experience in full-stack development and system design',
      'Contribute to large-scale software projects and improve leadership skills',
    ],
  },
  {
    title: 'Long-Term Goals',
    period: '5+ years',
    icon: <Gamepad2 className="w-6 h-6" />,
    items: [
      'Become a Game Developer and work on innovative gaming projects',
      'Start my own software or game development company',
      'Integrate music production and technology to create immersive digital experiences',
    ],
  },
];

const skillsPlan = [
  'Improve data structures and algorithms knowledge',
  'Learn advanced system design and cloud technologies',
  'Enhance communication and leadership skills',
];

const CareerDevelopmentPlan = () => {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start mb-10">
          <div>
            <p className="text-purple-300 font-medium mb-3">Professional Growth Roadmap</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Career Development Plan
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              My career goal is to become a highly skilled Software Engineer and later specialize in Game Development by combining creativity and technology.
            </p>
          </div>

          <div className="glass-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300">
                <Flag className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold">Career Focus</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              This structured plan will guide my professional growth and help me achieve my long-term career aspirations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {goalSections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="glass-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <p className="text-sm text-purple-300">{section.period}</p>
                </div>
              </div>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item} className="flex gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="glass-card"
        >
          <h2 className="text-2xl font-semibold mb-5">Skills Development Plan</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {skillsPlan.map((skill) => (
              <div key={skill} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <CheckCircle2 className="w-5 h-5 text-purple-300 mb-3" />
                <p className="text-gray-300">{skill}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default CareerDevelopmentPlan;
