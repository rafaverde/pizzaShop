import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { GetManagedRestaurant } from "@/api/get-managed-restaurant";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: GetManagedRestaurant,
  });

  const { register, handleSubmit } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? " ",
      description: managedRestaurant?.description ?? " ",
    },
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu
          cliente.
        </DialogDescription>

        <form action="">
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="name">
                Nome
              </Label>
              <Input className="col-span-3" id="name" {...register("name")} />

              <Label className="text-right" htmlFor="description">
                Descrição
              </Label>
              <Textarea
                className="col-span-3"
                id="description"
                {...register("description")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
            <Button type="submit" variant="success">
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogHeader>
    </DialogContent>
  );
}
