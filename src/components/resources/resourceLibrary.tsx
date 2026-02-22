"use client";
import React, { useState, useMemo } from "react"; // Ya no necesitamos useEffect
import {
  Input,
  Tab,
  Tabs,
  Card,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Pagination,
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

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

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

  const pages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);

  const paginatedResources = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredResources.slice(start, end);
  }, [currentPage, filteredResources]);

  // ELIMINAMOS EL useEffect COMPLETO DE AQUÍ

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 -mt-30 md:-mt-20 relative z-20">
      <div className="bg-card/80 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center w-full">
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            <Tabs
              aria-label="Categorías"
              color="primary"
              variant="underlined"
              classNames={{
                base: "w-full md:w-auto",
                tabList:
                  "w-full md:w-auto gap-2 md:gap-6 relative rounded-none p-0 border-b border-divider flex-nowrap",
                cursor: "w-full bg-primary",
                tab: "max-w-fit px-2 h-10 md:h-12",
                tabContent:
                  "group-data-[selected=true]:text-primary text-white/60 font-medium text-xs md:text-sm whitespace-nowrap",
              }}
              selectedKey={selectedCategory}
              onSelectionChange={(key) => {
                setSelectedCategory(key as string);
                setCurrentPage(1);
              }}
            >
              <Tab key="todos" title="Todos" />
              <Tab key="formacion" title="Formación" />
              <Tab key="integracion" title="Integración" />
              <Tab key="liturgia" title="Liturgia" />
              <Tab key="formatos jovenes" title="Form. Jóvenes" />
              <Tab key="formatos adolescentes" title="Form. Adolescentes" />
            </Tabs>
          </div>

          <div className="w-full md:w-auto shrink-0 mt-2 md:mt-0">
            <Input
              classNames={{
                base: "w-full md:w-72 h-10 md:h-12",
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
              onValueChange={(val) => {
                setSearch(val);
                setCurrentPage(1);
              }}
              isClearable
              onClear={() => {
                setSearch("");
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </div>

      {filteredResources.length > 0 ? (
        <div className="pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
            {paginatedResources.map((item) => (
              <Card
                key={item.id}
                className="bg-card/70 border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <CardBody className="flex flex-row gap-3 md:gap-4 items-start p-4 md:p-5">
                  <div className="p-2 md:p-3 bg-white/5 rounded-xl border border-white/5 shrink-0">
                    {getIconByType(item.type)}
                  </div>

                  <div className="flex flex-col gap-1 min-w-0 w-full">
                    <h3 className="text-sm md:text-base font-bold text-white leading-tight truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/50 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex gap-2 mt-1 md:mt-2 items-center">
                      <Chip
                        size="sm"
                        variant="flat"
                        color="default"
                        className="text-[9px] md:text-[10px] uppercase h-5 md:h-6"
                      >
                        {item.type}
                      </Chip>
                      {item.size && (
                        <span className="text-[10px] text-white/30">
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
                    className="font-bold text-xs md:text-sm"
                    size="sm"
                    endContent={
                      item.type === "link" ? (
                        <ExternalLink size={16} />
                      ) : (
                        <Download size={16} />
                      )
                    }
                  >
                    {item.type === "link" ? "Abrir" : "Descargar"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {pages > 1 && (
            <div className="flex justify-center w-full">
              <Pagination
                isCompact
                showControls
                color="primary"
                page={currentPage}
                total={pages}
                onChange={(page) => setCurrentPage(page)}
                classNames={{
                  item: "bg-secondary/50 text-white",
                  cursor: "bg-primary text-white",
                  next: "bg-secondary/30 text-white",
                  prev: "bg-secondary/30 text-white",
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20 px-4">
          <p className="text-white/40 text-base md:text-lg mb-4">
            No encontramos nada con ese nombre 😢
          </p>
          <Button
            variant="light"
            color="primary"
            onPress={() => {
              setSearch("");
              setSelectedCategory("todos");
              setCurrentPage(1);
            }}
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
};
