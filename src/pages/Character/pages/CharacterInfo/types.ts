import { DescriptionsItemType as DescriptionsItemTypeANTD } from "antd/es/descriptions";

export type DescriptionsItemType = DescriptionsItemTypeANTD & {
    label: string;
    children: string;
}