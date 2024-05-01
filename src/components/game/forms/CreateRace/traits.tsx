"use client";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CreateRace } from "@/types/game/form/createRace";
import { useCallback, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

interface Props {}

const TraitsArray: React.FC<Props> = () => {
  const { control } = useFormContext<CreateRace>();
  const { fields, append, remove } = useFieldArray<CreateRace, "traits", "id">({
    control: control,
    name: "traits",
  });

  const [editedTraitId, setEditedTraitId] = useState<number | null>(null);

  const editTrait = useCallback((index: number) => {
    setEditedTraitId(index);
  }, []);
  const removeTrait = useCallback((index: number) => {
    remove(index);
  }, []);

  return (
    <div className="space-y-5">
      <p>Traits</p>
      {fields.length > 0 && (
        <div className="space-y-5">
          {fields.map((trait, i) => {
            if (editedTraitId != i) {
              return (
                <div
                  key={trait.id}
                  className={cn("flex flex-row justify-between items-start border-l-2 px-5 shadow-lg py-3", {
                    "pt-5": i != 0,
                  })}
                >
                  <div className="flex flex-col gap-2">
                    <FormField
                      name={`traits.${i}.name`}
                      render={({ field }) => (
                        <span>
                          Name: <span className="font-bold underline capitalize">{field.value}</span>
                        </span>
                      )}
                    />
                    <FormField
                      name={`traits.${i}.description`}
                      render={({ field }) => (
                        <>
                          <span>Description:</span>
                          <p className="pl-5 italic">{field.value}</p>
                        </>
                      )}
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <Button variant={"secondary"} onClick={() => editTrait(i)}>
                      Edit
                    </Button>
                    <Button variant={"destructive"} onClick={() => removeTrait(i)}>
                      Remove
                    </Button>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={trait.id} className={cn("space-y-5 border-l-2 shadow-lg px-5 py-5", { "pt-5": i != 0 })}>
                  <FormField
                    name={`traits.${i}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trait name</FormLabel>
                        <FormControl>
                          <Input placeholder="Trait name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name={`traits.${i}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trait description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Trait description" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="space-x-2">
                    <Button type="button" variant={"destructive"} onClick={() => removeTrait(i)}>
                      Remove
                    </Button>
                    <Button type="button" variant={"secondary"} onClick={() => setEditedTraitId(null)}>
                      Save
                    </Button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
      {fields.length < 1 && <div>This class has no traits. Add one!</div>}
      <Button
        type="button"
        onClick={() => {
          append({ description: "", name: "" });
          setEditedTraitId(fields.length);
        }}
      >
        Add new trait
      </Button>
    </div>
  );
};

export default TraitsArray;
