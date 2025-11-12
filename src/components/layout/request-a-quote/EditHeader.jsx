import {Button} from "@/components/ui/button.jsx";
import {Pencil} from "lucide-react";

function EditHeader({onEdit, title}) {
    return(
        <div className="flex items-center gap-2">
            <h3 className="font-semibold text-grey">{title}</h3>
            <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onEdit}
                className="text-btn-primary"
            >
                <Pencil className="w-4 h-4 mr-1" />
                Edit
            </Button>
        </div>
    )
}

export default EditHeader;