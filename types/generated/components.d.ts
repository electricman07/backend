import type { Schema, Struct } from '@strapi/strapi';

export interface AboutSkill extends Struct.ComponentSchema {
  collectionName: 'components_about_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    proficiency: Schema.Attribute.Integer;
  };
}

export interface AboutTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_about_timeline_items';
  info: {
    displayName: 'Timeline-Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface HeroSections extends Struct.ComponentSchema {
  collectionName: 'components_hero_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface NavigationMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_links';
  info: {
    displayName: 'Menu-Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.skill': AboutSkill;
      'about.timeline-item': AboutTimelineItem;
      'hero.sections': HeroSections;
      'navigation.menu-link': NavigationMenuLink;
    }
  }
}
