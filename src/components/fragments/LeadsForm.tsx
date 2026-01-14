'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldTitle,
} from '../ui/field';
import { Input } from '../ui/input';
import { Controller, useForm } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';

export function LeadsForm() {
	const leadFormSchema = z
		.object({
			name: z
				.string('Informe um nome')
				.min(4, 'Deve ter pelo menos 4 caracteres'),
			email: z.email('Digite um e-mail válido'),
			phoneNumber: z
				.string('Informe um telefone')
				.regex(
					/^\(\d{2}\)\s\d\s\d{4}-\d{4}$/,
					'Digite um número no formato (xx) x xxxx-xxxx',
				),
			type: z.enum(
				['resident', 'tourist', 'company'],
				'Escolha uma opção',
			),
			companyName: z.string().nullable().optional(),
		})
		.refine(
			(data) =>
				data.type !== 'company' ||
				(data.companyName && data.companyName.trim().length > 0),
			{
				message: 'O nome da empresa é obrigatório',
				path: ['companyName'],
			},
		);

	type LeadFormSchema = z.infer<typeof leadFormSchema>;

	const form = useForm<LeadFormSchema>({
		resolver: zodResolver(leadFormSchema),
		defaultValues: {
			email: '',
			name: '',
			phoneNumber: '',
		},
		mode: 'onTouched',
	});

	function onSubmit(data: LeadFormSchema) {
		const payload: LeadFormSchema = {
			...data,
			companyName: data.companyName === '' ? undefined : data.companyName,
		};
		toast('Enviado', {
			description: JSON.stringify(payload, null, 2),
			position: 'bottom-right',
			dismissible: true,
			classNames: {
				content: 'flex flex-col gap-2',
			},
		});
	}

	function maskPhone(value: string) {
		const v = value.replace(/\D/g, ''); // remove tudo que não é número

		if (v.length === 0) return '';
		if (v.length < 3) return `(${v}`;

		// Já tem DDD completo
		const ddd = v.slice(0, 2);
		const rest = v.slice(2);

		// Adiciona o espaço logo após o DDD
		let formatted = `(${ddd})`;

		if (rest.length > 0) {
			// adiciona espaço + o primeiro dígito (ex: 9)
			formatted += ` ${rest[0]}`;
		}

		if (rest.length > 1) {
			// adiciona espaço após o primeiro dígito e antes dos próximos
			formatted += ` ${rest.slice(1, 5)}`;
		}

		if (rest.length > 5) {
			// adiciona o hífen antes dos últimos 4 dígitos
			formatted += `-${rest.slice(5, 9)}`;
		}

		return formatted;
	}

	const leadType = [
		{
			id: 'resident',
			title: 'Morador',
			description:
				'Quero descobrir mais sobre minha cidade e cidades vizinhas para passeios',
		},
		{
			id: 'tourist',
			title: 'Turista',
			description:
				'Quero descobrir a Ibiapaba antes e durante a viagem, para criar roteiros e economizar',
		},
		{
			id: 'company',
			title: 'Empresário',
			description:
				'Quero estar anunciar meu negócio dentro do app para atrair mais clientes',
		},
	] as const;

	return (
		<Card className='w-full mt-4'>
			<CardHeader>
				<CardTitle>Formulário de interesse</CardTitle>
				<CardDescription>
					Preencha e avisaremos assim que o app estiver pronto!
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					className='space-y-6'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FieldGroup className='flex md:flex-row'>
						<div className='flex flex-col gap-6 flex-1'>
							<Controller
								name='type'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel mandatory>
											Você é
										</FieldLabel>

										<RadioGroup
											className='flex flex-wrap'
											name={field.name}
											value={field.value}
											onValueChange={field.onChange}
											aria-invalid={fieldState.invalid}
										>
											{leadType.map((type) => (
												<FieldLabel
													key={type.id}
													htmlFor={`form-rhf-radiogroup-${type.id}`}
												>
													<Field
														orientation='horizontal'
														data-invalid={
															fieldState.invalid
														}
													>
														<RadioGroupItem
															value={type.id}
															id={`form-rhf-radiogroup-${type.id}`}
															aria-invalid={
																fieldState.invalid
															}
														/>
														<FieldContent>
															<FieldTitle>
																{type.title}
															</FieldTitle>
															<FieldDescription>
																{
																	type.description
																}
															</FieldDescription>
														</FieldContent>
													</Field>
												</FieldLabel>
											))}
										</RadioGroup>

										{fieldState.invalid && (
											<FieldError
												errors={[fieldState.error]}
											/>
										)}
									</Field>
								)}
							/>
						</div>

						<div className='flex flex-col gap-6 flex-1'>
							<Controller
								name='name'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel mandatory>Nome</FieldLabel>
										<Input
											{...field}
											aria-invalid={fieldState.invalid}
											type='text'
											placeholder='Seu nome e sobrenome'
											autoComplete='name'
										/>

										{fieldState.invalid && (
											<FieldError
												errors={[fieldState.error]}
											/>
										)}
									</Field>
								)}
							/>

							<Controller
								name='email'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel mandatory>
											E-mail
										</FieldLabel>
										<Input
											{...field}
											aria-invalid={fieldState.invalid}
											type='email'
											placeholder='Seu melhor e-mail'
											autoComplete='email'
										/>

										{fieldState.invalid && (
											<FieldError
												errors={[fieldState.error]}
											/>
										)}
									</Field>
								)}
							/>

							<Controller
								name='phoneNumber'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel mandatory>
											Telefone
										</FieldLabel>

										<Input
											{...field}
											value={field.value ?? ''}
											onChange={(e) =>
												field.onChange(
													maskPhone(e.target.value),
												)
											}
											aria-invalid={fieldState.invalid}
											type='text'
											placeholder='(11) 9 1234-5678'
											autoComplete='tel'
										/>

										{fieldState.invalid && (
											<FieldError
												errors={[fieldState.error]}
											/>
										)}
									</Field>
								)}
							/>

							{form.getValues('type') === 'company' && (
								<Controller
									name='companyName'
									control={form.control}
									render={({ field, fieldState }) => (
										<Field
											data-invalid={fieldState.invalid}
										>
											<FieldLabel mandatory>
												Nome da sua empresa
											</FieldLabel>
											<Input
												{...field}
												value={field.value ?? undefined}
												aria-invalid={
													fieldState.invalid
												}
												type='text'
												placeholder='Nome da sua empresa'
											/>

											{fieldState.invalid && (
												<FieldError
													errors={[fieldState.error]}
												/>
											)}
										</Field>
									)}
								/>
							)}
						</div>
					</FieldGroup>

					<Button className='w-full md:w-fit mt-3' type='submit'>
						Enviar
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
