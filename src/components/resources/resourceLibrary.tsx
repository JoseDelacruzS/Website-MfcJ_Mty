"use client";
import React, { useState, useMemo } from "react";
import {
  Input,
  Tab,
  Tabs,
  Card,
  CardBody,
  CardFooter,
  Button,
  Chip,
} from "@heroui/react";
import {
  Search,
  FileText,
  Download,
  ExternalLink,
  Music,
  FolderArchive,
  File,
} from "lucide-react";
import resourcesData from "@/data/resources.json";

const getIconByType = (type: string) => {
  switch (type) {
    case "pdf":
      return <FileText size={24} className="text-red-500" />;
    case "zip":
      return <FolderArchive size={24} className="text-yellow-500" />;
    case "link":
      return <Music size={24} className="text-green-500" />;
    case "ppt":
      return <File size={24} className="text-orange-500" />;
    default:
      return <FileText size={24} className="text-blue-500" />;
  }
};

export const ResourceLibrary = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredResources = useMemo(() => {
    return resourcesData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "todos" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 -mt-20 relative z-20">
      <div className="bg-card/80 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-3xl shadow-2xl mb-12">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Tabs
              aria-label="Categorías"
              color="primary"
              variant="underlined"
              classNames={{
                base: "w-full md:w-auto",
                tabList:
                  "w-full md:w-auto gap-4 md:gap-6 relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-primary",
                tab: "max-w-fit px-2 h-10 md:h-12",
                tabContent:
                  "group-data-[selected=true]:text-primary text-white/60 font-medium text-sm md:text-base",
              }}
              selectedKey={selectedCategory}
              onSelectionChange={(key) => setSelectedCategory(key as string)}
            >
              <Tab key="todos" title="Todos" />
              <Tab key="formacion" title="Formación" />
              <Tab key="integracion" title="Integración" />
              <Tab key="liturgia" title="Liturgia" />
              <Tab key="formatos jovenes" title="Formatos Jóvenes" />
              <Tab key="formatos adolescentes" title="Formatos Adolescentes" />
            </Tabs>
          </div>
          <div className="w-full md:w-auto">
            <Input
              classNames={{
                base: "w-full md:w-64 h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Buscar archivo..."
              size="sm"
              startContent={<Search size={18} />}
              type="search"
              value={search}
              onValueChange={setSearch}
            />
          </div>
        </div>
      </div>

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-24">
          {filteredResources.map((item) => (
            <Card
              key={item.id}
              className="bg-card/70 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <CardBody className="flex flex-row gap-4 items-start p-4 md:p-5">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 shrink-0">
                  {getIconByType(item.type)}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  {" "}
                  <h3 className="text-base md:text-lg font-bold text-white leading-tight truncate">
                    {item.title}
                  </h3>
                  <p className="text-small text-white/50 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Chip
                      size="sm"
                      variant="flat"
                      color="default"
                      className="text-[10px] uppercase h-6"
                    >
                      {item.type}
                    </Chip>
                    {item.size && (
                      <span className="text-[10px] text-white/30 self-center">
                        {item.size}
                      </span>
                    )}
                  </div>
                </div>
              </CardBody>

              <CardFooter className="pt-0 pb-4 px-4 md:pb-5 md:px-5">
                <Button
                  as="a"
                  href={item.url}
                  target="_blank"
                  fullWidth
                  color="secondary"
                  variant="solid"
                  className="font-bold"
                  size="sm"
                  endContent={
                    item.type === "link" ? (
                      <ExternalLink size={16} />
                    ) : (
                      <Download size={16} />
                    )
                  }
                >
                  {item.type === "link" ? "Abrir enlace" : "Descargar"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-white/40 text-lg mb-4">
            No encontramos nada con ese nombre 😢
          </p>
          <Button
            variant="light"
            color="primary"
            onPress={() => {
              setSearch("");
              setSelectedCategory("todos");
            }}
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
};
