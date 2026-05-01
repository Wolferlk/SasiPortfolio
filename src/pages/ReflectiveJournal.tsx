import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Users, Briefcase, ShieldCheck } from 'lucide-react';

const journalPoints = [
  {
    title: 'Professional Growth',
    icon: <BookOpen className="w-6 h-6" />,
    text: 'The Professional Practice and Work (PPW) module provided me with valuable insights into the professional world and helped me bridge the gap between academic knowledge and real-world industry expectations.',
  },
  {
    title: 'Soft Skills',
    icon: <Users className="w-6 h-6" />,
    text: 'Throughout this module, I learned essential soft skills such as communication, teamwork, leadership, and professional behavior. Participating in group activities and discussions improved my ability to collaborate effectively with others and express my ideas clearly.',
  },
  {
    title: 'Challenges Faced',
    icon: <Lightbulb className="w-6 h-6" />,
    text: 'One of the main challenges I faced was managing time between academic work and project responsibilities. Additionally, working in a team environment required me to adapt to different perspectives and resolve conflicts professionally. However, these challenges helped me grow both personally and professionally.',
  },
  {
    title: 'Internship Experience',
    icon: <Briefcase className="w-6 h-6" />,
    text: 'During my internship experience, I had the opportunity to lead a team of 15 software engineering interns and successfully deliver multiple projects within a limited timeframe. This experience significantly improved my leadership, decision-making, and problem-solving skills.',
  },
  {
    title: 'Career Readiness',
    icon: <ShieldCheck className="w-6 h-6" />,
    text: 'Overall, the PPW module has prepared me for the professional environment by enhancing my confidence, communication skills, and ability to work under pressure. These skills will play a crucial role in my future career as a Software Engineer.',
  },
];

const ReflectiveJournal = () => {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-10">
          <p className="text-purple-300 font-medium mb-3">Professional Practice and Work Module</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Reflective Journal
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            A reflection on the professional skills, leadership experiences, and personal growth gained through academic and workplace practice.
          </p>
        </div>

        <div className="grid gap-6">
          {journalPoints.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="glass-card"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                  {point.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">{point.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{point.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ReflectiveJournal;
