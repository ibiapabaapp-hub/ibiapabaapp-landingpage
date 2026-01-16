'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '../ui/textarea';

type LeadResponseSentPopupProps = {
	open: boolean;
	setOpenAction: (open: boolean) => void;
	defaultOpen?: boolean;
};

export function LeadResponseSentPopup({
	open,
	setOpenAction,
	defaultOpen = false,
}: LeadResponseSentPopupProps) {
	const textToBeCopied = `Vi que estão fazendo um app só da Ibiapaba e achei muito bacana.\n\nMostra o que tá acontecendo na Serra e lugares pra conhecer.\n\nBem interessante, olha só 👇 \nhttps://ibiapabaapp.com.br/`;

	return (
		<Dialog
			open={open}
			onOpenChange={setOpenAction}
			defaultOpen={defaultOpen}
		>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Obrigado por entrar na lista!</DialogTitle>
					<DialogDescription>
						Você já está entre os primeiros a experimentar o
						IbiapabaApp.
						<br />
						<br />
						Selecione, copie o texto abaixo e mande pra quem também
						deve aproveitar o app pra descobrir e anunciar!
					</DialogDescription>
				</DialogHeader>

				<div className='grid flex-1 gap-2'>
					<Label htmlFor='link' className='sr-only'>
						Texto
					</Label>

					<Textarea
						id='link'
						readOnly
						value={textToBeCopied}
						rows={5}
						className='w-full whitespace-pre-wrap'
					/>
				</div>

				<span className='text-sm text-muted-foreground mt-2 block'>
					É só colar no WhatsApp ou onde quiser compartilhar!
				</span>

				<DialogFooter className='sm:justify-start'>
					<DialogClose asChild>
						<Button type='button' variant='outline'>
							Fechar
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
