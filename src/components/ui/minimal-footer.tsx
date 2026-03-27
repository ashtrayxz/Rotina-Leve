import {
	FacebookIcon,
	InstagramIcon,
} from 'lucide-react';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	const company = [
		{
			title: 'Política de Privacidade',
			href: '#',
		},
		{
			title: 'Termos de Uso',
			href: '#',
		},
	];

	const resources = [
		{
			title: 'Dúvidas Frequentes',
			href: '#duvidas',
		},
		{
			title: 'Suporte',
			href: '#',
		},
	];

	const socialLinks = [
		{
			icon: <InstagramIcon className="size-4" />,
			link: 'https://instagram.com/rotinalevebr',
		},
		{
			icon: <FacebookIcon className="size-4" />,
			link: '#',
		},
	];
	return (
		<footer className="relative bg-white/50 backdrop-blur-md pt-16 pb-24 md:pb-12 border-t border-primary/10">
			<div className="bg-[radial-gradient(35%_80%_at_30%_0%,rgba(75,100,83,0.1),transparent)] mx-auto max-w-5xl md:border-x border-primary/10">
				<div className="bg-primary/10 absolute inset-x-0 h-px w-full" />
				<div className="grid max-w-5xl grid-cols-6 gap-8 p-6 md:p-8">
					<div className="col-span-6 flex flex-col gap-5 md:col-span-4">
						<a href="#" className="flex items-center gap-2 w-max text-primary">
							<span className="material-symbols-outlined text-3xl">spa</span>
							<span className="font-serif italic text-2xl font-bold">Rotina Leve</span>
						</a>
						<p className="text-on-surface-variant max-w-sm font-label text-sm text-balance leading-relaxed">
							Transformando a sua alimentação e a sua rotina com praticidade, saúde e muito sabor.
						</p>
						<div className="flex gap-3 mt-2">
							{socialLinks.map((item, i) => (
								<a
									key={i}
									className="hover:bg-primary/10 text-primary rounded-md border border-primary/20 p-2 transition-colors"
									target="_blank"
									href={item.link}
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-primary font-bold mb-4 block text-xs uppercase tracking-widest">
							Links Úteis
						</span>
						<div className="flex flex-col gap-3">
							{resources.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max text-sm text-on-surface-variant duration-200 hover:text-primary hover:underline`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-primary font-bold mb-4 block text-xs uppercase tracking-widest">Empresa</span>
						<div className="flex flex-col gap-3">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max text-sm text-on-surface-variant duration-200 hover:text-primary hover:underline`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="bg-primary/10 absolute inset-x-0 h-px w-full" />
				<div className="flex max-w-5xl flex-col justify-between gap-2 pt-6 pb-6 px-6 md:px-8">
					<p className="text-on-surface-variant/70 text-center font-label text-xs">
						© Rotina Leve. Todos os direitos reservados {year}.
					</p>
				</div>
			</div>
		</footer>
	);
}
