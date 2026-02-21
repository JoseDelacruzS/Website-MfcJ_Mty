"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Textarea,
  Button,
  addToast, // 1. Importamos la función mágica para crear Toasts
} from "@heroui/react";
import { Send } from "lucide-react";
import { sendContactEmail } from "@/actions/sendEmail";

export const ContactModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      addToast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos lo más pronto posible.",
        color: "success",
        variant: "bordered",
      });

      (e.target as HTMLFormElement).reset();
      onOpenChange();
    } else {
      addToast({
        title: "Error al enviar",
        description: "Hubo un problema de conexión. Intenta de nuevo.",
        color: "danger",
        variant: "bordered",
      });
    }

    setIsPending(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
      classNames={{
        base: "bg-background/80 backdrop-blur-md border border-white/10 shadow-2xl",
        header: "border-b border-white/5",
        closeButton: "hover:bg-white/10 active:bg-white/20",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-white">
              Escríbenos
            </ModalHeader>
            <ModalBody className="pb-6 pt-4">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  isRequired
                  name="name"
                  label="Tu Nombre"
                  placeholder="Juan Pérez"
                  variant="faded"
                  size="sm"
                />
                <Input
                  isRequired
                  name="phone"
                  type="tel"
                  label="Teléfono / WhatsApp"
                  placeholder="81 1234 5678"
                  variant="faded"
                  size="sm"
                />
                <Input
                  name="email"
                  type="email"
                  label="Correo Electrónico"
                  placeholder="juan@ejemplo.com"
                  variant="faded"
                  size="sm"
                />
                <Textarea
                  isRequired
                  name="message"
                  label="Mensaje"
                  placeholder="Hola, me gustaría unirme al MFCJ..."
                  variant="faded"
                  minRows={3}
                  size="sm"
                />

                <Button
                  type="submit"
                  color="primary"
                  className="w-full font-bold mt-2"
                  isLoading={isPending}
                  endContent={!isPending && <Send size={16} />}
                >
                  {isPending ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
