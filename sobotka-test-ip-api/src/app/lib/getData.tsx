"use client";
import {InfoProps} from "../components/Info";

export async function getData(query: string) {
    const res = await fetch('http://ip-api.com/json/' + query);
    const data:InfoProps = await res.json();
    return data;
}
