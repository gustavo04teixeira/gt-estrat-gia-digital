import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <div className="text-white font-heading font-bold text-2xl">
                  <span className="text-primary-400">Digi</span>
                  <span className="text-secondary-400">Marketing</span>
                </div>
              </Link>
            </div>
            <p className="mb-6">
              Transformamos sua presença digital com estratégias inovadoras e eficientes para alavancar seus resultados.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos#marketing-conteudo" className="hover:text-primary-400 transition-colors">Marketing de Conteúdo</Link>
              </li>
              <li>
                <Link to="/servicos#seo" className="hover:text-primary-400 transition-colors">SEO</Link>
              </li>
              <li>
                <Link to="/servicos#midia-paga" className="hover:text-primary-400 transition-colors">Mídia Paga</Link>
              </li>
              <li>
                <Link to="/servicos#redes-sociais" className="hover:text-primary-400 transition-colors">Gestão de Redes Sociais</Link>
              </li>
              <li>
                <Link to="/servicos#email-marketing" className="hover:text-primary-400 transition-colors">Email Marketing</Link>
              </li>
              <li>
                <Link to="/servicos#desenvolvimento-web" className="hover:text-primary-400 transition-colors">Desenvolvimento Web</Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary-400 transition-colors">Portfólio</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-primary-400 transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary-400 transition-colors">Contato</Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="hover:text-primary-400 transition-colors">Política de Privacidade</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-primary-400" />
                <span>Av. Paulista, 1000, São Paulo - SP, Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-400" />
                <a href="tel:+551199999999" className="hover:text-primary-400 transition-colors">+55 11 9999-9999</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-400" />
                <a href="mailto:contato@digimarketing.com.br" className="hover:text-primary-400 transition-colors">contato@digimarketing.com.br</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} DigiMarketing. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/termos" className="text-sm hover:text-primary-400 transition-colors mr-6">Termos de Uso</Link>
            <Link to="/politica-privacidade" className="text-sm hover:text-primary-400 transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;