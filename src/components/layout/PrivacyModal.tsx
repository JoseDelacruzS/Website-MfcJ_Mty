"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

export const PrivacyModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      size="2xl"
      backdrop="blur"
      classNames={{
        base: "bg-background/90 backdrop-blur-xl border border-white/10",
        header: "border-b border-white/10",
        footer: "border-t border-white/10",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-white">
              Aviso de Privacidad
            </ModalHeader>
            <ModalBody className="py-6 text-white/70 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                <strong>Última actualización:</strong> Febrero de 2026
              </p>

              <h3 className="text-white font-bold text-lg mt-4">
                1. Identidad y domicilio
              </h3>
              <p>
                El Movimiento Familiar Cristiano Juvenil (MFCJ) Monterrey, con
                domicilio en Loma Redonda 216, Loma Larga, 64710 Monterrey,
                N.L., es responsable del uso y protección de sus datos
                personales, así como de la información multimedia publicada en
                nuestro sitio web.
              </p>

              <h3 className="text-white font-bold text-lg mt-4">
                2. Datos que recabamos
              </h3>
              <p>
                Para las finalidades señaladas en el presente aviso de
                privacidad, recabamos sus datos de dos maneras:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Por contacto directo:</strong> Nombre completo,
                  teléfono y correo electrónico cuando usted nos contacta o se
                  registra a un evento.
                </li>
                <li>
                  <strong>Por participación activa:</strong> Información de
                  jóvenes coordinadores (nombres y teléfonos de contacto
                  sectorial), ubicaciones de sedes parroquiales, y material
                  fotográfico o en video de adolescentes y jóvenes participando
                  en actividades, retiros, y apostolados del MFCJ.
                </li>
              </ul>

              <h3 className="text-white font-bold text-lg mt-4">
                3. Fines de los datos y material publicado
              </h3>
              <p>
                La información personal recabada, así como los nombres,
                teléfonos, enlaces a redes sociales, archivos descargables,
                noticias y
                <strong> fotografías publicadas en esta página web</strong>, se
                utilizan estrictamente para los siguientes fines:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responder a sus mensajes y brindar información.</li>
                <li>
                  Facilitar el contacto entre los jóvenes interesados y los
                  coordinadores de cada sector/sede.
                </li>
                <li>
                  Difundir y promover las actividades pastorales, retiros y la
                  obra del MFC Juvenil Monterrey de manera visual.
                </li>
                <li>
                  Proveer recursos de formación (formatos, documentos y
                  presentaciones).
                </li>
              </ul>

              <h3 className="text-white font-bold text-lg mt-4">
                4. Uso de Imagen (Fotografías y Video)
              </h3>
              <p>
                El MFCJ Monterrey asume que, al participar en nuestras
                actividades y retiros, los jóvenes (y sus padres o tutores, en
                caso de ser menores de edad) otorgan su consentimiento implícito
                para el uso de su imagen en fotografías y videos con fines
                exclusivamente promocionales y testimoniales para este sitio web
                y nuestras redes sociales oficiales. No se hará uso comercial ni
                lucrativo de dicho material.
              </p>

              <h3 className="text-white font-bold text-lg mt-4">
                5. Protección y Derechos ARCO
              </h3>
              <p>
                Nos comprometemos a que sus datos serán tratados bajo las más
                estrictas medidas de seguridad. No vendemos ni rentamos su
                información. Si algún coordinador, joven o tutor desea que su
                nombre, teléfono o fotografía sea retirado o actualizado de este
                sitio web (Derechos ARCO), puede solicitarlo en cualquier
                momento enviando un mensaje a través de nuestra sección de
                contacto.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="flat"
                onPress={onClose}
                className="font-bold bg-primary text-white"
              >
                Entendido
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
